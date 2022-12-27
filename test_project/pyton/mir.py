import cv2 
import numpy as np
from random import randrange 
# # Включаем первую камеру
# cap = cv2.VideoCapture(0)

# # "Прогреваем" камеру, чтобы снимок не был тёмным
# for i in range(30):
#     cap.read()

# # Делаем снимок    
# ret, frame = cap.read()

# # Записываем в файл
# cv2.imwrite('cam.png', frame)   

# # Отключаем камеру
# cap.release()


cap = cv2.VideoCapture(0)

cap.set(cv2.CAP_PROP_FPS, 60) # Частота кадров
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 800) # Ширина кадров в видеопотоке.
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 600) # Высота кадров в видеопотоке.

while True:
    ret, img = cap.read()
    cv2.imshow("camera", img)
    if cv2.waitKey(10) == 27: # Клавиша Esc
        
        break

cap.release()
cv2.destroyAllWindows() 

# import qhyccd # import qhyccd wrapper
# import numpy as np

# qc = qhyccd.qhyccd() # create qhyccd object
# qc.SetExposure(qc, 1000) # set exposure to 1000ms
# image = qc.GetSingleFrame() # return image