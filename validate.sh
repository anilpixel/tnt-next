http_code=$(curl -I -m 10 -o /dev/null -s -w "%{http_code}" http://127.0.0.1:${APP_PORT}/ok.htm)
if [ "$http_code" != "200" ];then
    echo "应用健康检查失败，检查端口为$APP_PORT，请务必开启http接口HEAD方法，可以使用如下命令线下自我检查'http_code=\$(curl -I -m 10 -o /dev/null -s -w \"%{http_code}\" http://127.0.0.1:${APP_PORT}/ok.htm)'，确保http_code的返回值为200"
    exit 1
fi
