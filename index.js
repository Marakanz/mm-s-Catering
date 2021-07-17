$(document).ready(function () {
    // openNav = () => {
    //     document.getElementById("mySidenav").style.width = "400px";
    // }

    //   /* Set the width of the side navigation to 0 */
    // closeNav = () => {
    //     document.getElementById("mySidenav").style.width = "0";
    // }

    $(".cart-icon").click(function(){
        $("#mySideNav").css("width", "300px");
    });
    $(".cart-icon").click(function(){
        $("#menu").addClass('overlay');
    });
    $(".closebtn").click(function(){
        $("#mySideNav").css("width", "0px");
    });

})
