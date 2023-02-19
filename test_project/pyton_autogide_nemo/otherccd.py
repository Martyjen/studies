def camerastart():
    import cv2 
    import numpy as np
    from random import randrange 

    cap = cv2.VideoCapture(0) # Захватить изоображение и передать в переменную "cap"

    # Разкоментировать если нужно изменить частату кадров или разрешение
    # cap.set(cv2.CAP_PROP_FPS, 60) # Частота кадров
    # cap.set(cv2.CAP_PROP_FRAME_WIDTH, 800) # Ширина кадров в видеопотоке.
    # cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 600) # Высота кадров в видеопотоке.


    while True:
        tru, img = cap.read() # Функция cap.read() возвращает логическое значение "tru" (True/False) и "img" кадр. Если кадр был считан верно, то возвращается True.
                
        #img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) #Если нужно чёрно-белое изоображение - разкоментировать
        cv2.imshow("camera", img) # Первый аргумент "camera" – заголовок отображаемого изображения, второй "img" – сама переменная изображения.
        #cv2.imwrite('camera.png', img) #Запись кадка в память ПК - если нужно
        if cv2.waitKey(10) == 27: # Клавиша Esc - ожидание нажатия клавиши для закрытия преложения
            
            break 

    cap.release()
    cv2.destroyAllWindows() 
