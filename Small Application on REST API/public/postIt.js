$("document").ready(function()
{
   $("#submit").click(function()
    {
        var data=$("#texty").val();
        var item={list:data};
        $.ajax({
            type:'POST',
                url:'/',
        data:item,
        success:function()
    {
        location.reload();
    }
    });
    });
});