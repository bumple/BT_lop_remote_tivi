class TiVi {
    constructor(channel, volumn, boolean) {
        this.channel = channel;
        this.volumn = volumn;
        this.status = boolean;
        this.code = "9999";
    }

    setChannel(channel1) {
        this.channel = channel1;
        console.log("Tivi đã chuyển qua kênh: "+this.channel)
    }

    getChannel() {
        console.log("Tivi đang bật kênh: "+ this.channel )
        return this.channel
    }

    setVolumn(a) {
        this.volumn += a
        console.log("Volumn: " + this.volumn)
    }

    getVolumn() {

        return this.volumn;
    }
}