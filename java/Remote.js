class Remote {
    constructor(code) {
        this.code = code;
    }

    turnOnOff() {
        if (this.code === tivi.code) {
            if (tivi.status === false) {
                tivi.status = true;
                console.log("-----Đã --BẬT-- tivi")
            } else {
                tivi.status = false;
                console.log("-----Đã --TẮT-- tivi")
            }
        } else {
            console.log("code remote sai")
        }
    }

    remoteChannel(a) {
        if (this.code === tivi.code && tivi.status === true) {
            tivi.setChannel(a)
        } else {
            console.log("code remote sai! hoặc tivi chưa bật!")
        }
    }


    remoteVolumn(a) {
        if (this.code === tivi.code) {
            tivi.setVolumn(a)
        } else {
            console.log("code remote sai")
        }
    }
}