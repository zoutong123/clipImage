(function(){
    let root = this;
    root.CLIPIMG = (imgFile) => {
        this.imgFile = imgFile;
        this.Orientation = null;
        this.init();
    };
    CLIPIMG.prototype = {
        init: () => {
            let _this = this;
            _this.getData(_this.imgFile);
        },
        getData: (imgFile) => {
            let _this = this;
            if ((imgFile instanceof Image || imgFile instanceof HTMLImageElement) && !imgFile.complete) return false;
            if(!_this.imageHasData(imgFile)){
                
            }
        },
        getTag: (str) => {

        },
        imageHasData: (imgFile) => {
            return !!(imgFile.exifdata);
        }
    }
}).call(this);
