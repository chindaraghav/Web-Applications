$("document").ready(function()
{
    $("button").click(function () {
        var name=$("#name").val();
        var id=$("#id").val();
        var data={name:name,id:id};

        $.ajax({
            type:"POST",
            url:"/",
            data:data,
            success:function (data){
                location.reload();
                console.log("done");
            }

        });
    });
});