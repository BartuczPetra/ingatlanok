class Ajax {
    constructor(token) {
        this.token = token;
    }
    getAjax(apivegpont, myCallback) {
        const tomb = [];
        $.ajax({
            url: apivegpont,
            type: "GET",
            success: function(result) {
                result.forEach((element) => {
                    tomb.push(element);
                });
                myCallback(tomb);
            },
        });
    }
    postAjax(apiVegpont, adat) {
        adat._token = this.token;
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: apiVegpont,
            type: "POST",
            data: adat,
            success: function(result) {
                console.log(result);
            },
        });
    }

    deleteAjax(apiVegpont, id) {
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            url: apiVegpont + "/" + id,
            type: "DELETE",
            data: this.token,
            success: function(result) {
                console.log(result);
            },
        });
    }

    putAjax(apiVegpont, id, adat) {
        adat._token = this.token;
        $.ajax({
            headers: { "X-CSRF-TOKEN": this.token },
            datatype: "JSON",
            type: "PUT",
            url: apiVegpont + "/" + id,
            data: adat,
            success: function(result) {
                console.log(result);
            },
        });
    }
}
