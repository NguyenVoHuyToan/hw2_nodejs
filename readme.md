middlewware:
+ một middelware nhận vào 3 tham số: req, res. next
+ ở giữa những req và res.
+ thay đổi các giá trị của req và res
    _
+ kết thúc circle request-response
    _user -> login -> send data
    _user -> unlogin -> send erro: "unlogin"
+ Khi không muốn 1 route đi qua middleware => remove route lên trên middleware.