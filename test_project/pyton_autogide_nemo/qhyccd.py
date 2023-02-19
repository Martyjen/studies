

import ctypes
import time
import cv2
import numpy

from ctypes import *

# import viewimg

# response = ""
# image_data = ""
# maxImageSizeY = ""
# maxImageSizeX = ""

# import viewimg
# from viewimg import res_img

def qhystart():

    #==============Вывод названия камеры в терминал.==================
    qhyccd = ctypes.CDLL(r'd:\TestUroki\studies\studies\test_project\pyton_autogide_nemo\qhyccd.dll')

    @CFUNCTYPE(None, c_char_p)
    def pnp_in(cam_id):

        global onCamers
        onCamers = " %s" % cam_id
    @CFUNCTYPE(None, c_char_p)
    def pnp_out(cam_id):
        print("cam   - %s" % cam_id)

    def gui_start():
        qhyccd.RegisterPnpEventIn(pnp_in)
        qhyccd.RegisterPnpEventOut(pnp_out)
        qhyccd.InitQHYCCDResource()
        
    gui_start()
    #-----------------Конец-----------------------------------------

    qhyccd.GetQHYCCDParam.restype = ctypes.c_double
    qhyccd.OpenQHYCCD.restype = ctypes.POINTER(ctypes.c_uint32)

    result = qhyccd.InitQHYCCDResource() #;***Найти устройство перед открытием инициализаци qhyccd.dl***

    if result == 0:
            print("\n\033[32m 1): + SDK успешно инициализирована - qhyccd.dll найдена\033[0m")
    else:
        raise Exception('\033[31m 2): - НЕТ - SDK или qhyccd.dll не найдена') 

    cameras_found = qhyccd.ScanQHYCCD() #Проверить статус подключение камеры

    if cameras_found > 0:
        print("\033[32m 2): + Камера " + onCamers +" подключена \n\033[0m"  )
    else:
        raise Exception('\n\033[31m 2): - Камера не подключена\033[0m')


    position_id = 0
    type_char_array_32 = ctypes.c_char * 32
    id_object = type_char_array_32()
    result = qhyccd.GetQHYCCDId(position_id, id_object)

    camera_handle = qhyccd.OpenQHYCCD(id_object)

    qhyccd.SetQHYCCDStreamMode(camera_handle, ctypes.c_uint32(0))
    qhyccd.InitQHYCCD(camera_handle)

    chipWidthMM = ctypes.c_uint32(0)
    chipHeightMM = ctypes.c_uint32(0)

    maxImageSizeX = ctypes.c_uint32(0)

    maxImageSizeY = ctypes.c_uint32(0)
    pixelWidthUM = ctypes.c_uint32(0)
    pixelHeightUM = ctypes.c_uint32(0)
    bpp = ctypes.c_uint32(0)
    camera_info = qhyccd.GetQHYCCDChipInfo(
        camera_handle, ctypes.byref(chipWidthMM), ctypes.byref(chipHeightMM), ctypes.byref(maxImageSizeX),
        ctypes.byref(maxImageSizeY), ctypes.byref(pixelWidthUM), ctypes.byref(pixelHeightUM),
        ctypes.byref(bpp),
    )


    print([  # отобразить характеристики камеры
        chipWidthMM.value, chipHeightMM.value, maxImageSizeX.value, maxImageSizeY.value,
        pixelWidthUM.value, pixelHeightUM.value, bpp.value
    ])

    GAIN = ctypes.c_int(8)
    EXPOSURE_TIME = ctypes.c_int(8)
    depth = ctypes.c_uint32(8)

    qhyccd.SetQHYCCDBitsMode(camera_handle, depth)
    qhyccd.SetQHYCCDParam.restype = ctypes.c_uint32
    qhyccd.SetQHYCCDParam.argtypes = [ctypes.c_void_p, ctypes.c_int, ctypes.c_double]
    qhyccd.SetQHYCCDParam(camera_handle, GAIN, ctypes.c_double(100))
    qhyccd.SetQHYCCDParam(camera_handle, EXPOSURE_TIME, ctypes.c_double(9000)) #экспозиция (9000 темно но работает)
    qhyccd.SetQHYCCDResolution(camera_handle, ctypes.c_uint32(0), ctypes.c_uint32(0), maxImageSizeX, maxImageSizeY)
    qhyccd.SetQHYCCDBinMode(camera_handle, ctypes.c_uint32(1), ctypes.c_uint32(1))
    qhyccd.ExpQHYCCDSingleFrame(camera_handle)
    # global image_data
    image_data = (ctypes.c_uint8 * maxImageSizeX.value * maxImageSizeY.value)()
    channels = ctypes.c_uint32(1)

    qhyccd.ExpQHYCCDSingleFrame(camera_handle)
    time.sleep(1)

    #-----сделать один снимок--

    # response = qhyccd.GetQHYCCDSingleFrame(
    #     camera_handle, ctypes.byref(maxImageSizeX), ctypes.byref(maxImageSizeY),
    #     ctypes.byref(depth), ctypes.byref(channels), image_data,
    # )

    # print('RESPONSE: %s' % response)
    # bytes_data = bytearray(image_data)
    # print(bytes_data[0], bytes_data[1])

    #------------серийное фото-----------

    while True:
        
        response = qhyccd.GetQHYCCDSingleFrame(
        camera_handle, ctypes.byref(maxImageSizeX), ctypes.byref(maxImageSizeY), 
        ctypes.byref(depth), ctypes.byref(channels), image_data,
        )
        # print('RESPONSE: %s' % response)
        bytes_data = bytearray(image_data)
        # print(bytes_data[0], bytes_data[1])
        raw_array = numpy.array(bytes_data)

        mono_image = raw_array.reshape(maxImageSizeY.value, maxImageSizeX.value) #Преобразовать изоображение размер снимка под размер сенсора камеры
        res_img = cv2.resize(mono_image, (640, 480), cv2.INTER_NEAREST) #изменить разрешение видео привью
        
        
        cv2.imshow("5555", res_img )
        # viewimg.viewImg()
        if cv2.waitKey(10) == 27: # Клавиша Esc
            
            break

    #------------конец фото-----------

    

    qhyccd.CancelQHYCCDExposingAndReadout(camera_handle)
    qhyccd.CloseQHYCCD(camera_handle)
    qhyccd.ReleaseQHYCCDResource()




