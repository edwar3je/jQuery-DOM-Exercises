// console.log the message "Let's get ready to party with jQuery" when the DOM is ready
$("document").ready(function(){
    console.log("Let's get ready to party with jQuery")
});
// give all images inside of an article tag the class of image-center
$("article img").addClass("image-center")
// remove the last paragraph in the article
$("article p").last().remove()
// set the font size of the title to be a random pixel size from 0 to 100
$("h1#title").css("font-size", function(){
    return `${Math.floor(Math.random() * 100)}px`
});
// add an item to the list; it can say whatever you want (hint: prepend an li to ol)
$("<li>I can see my house from here</li>").prependTo("ol");
// empty all elements from aside and add a paragraph formally apologizing for the list's existence
$("aside").children().remove();
$("<p>We formally apologize for this list's existence as it was completely pointless. We also apologize for wasting your time with this apology.</p>").appendTo("aside");
// when you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are
// Note: had to use solution to look up the correct event to listen for
$(".form-control").on("keyup blur change", function(){
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
});
// add an event listener to the image to remove it when you click on it.
$("article img").on("click", function(){
    $(this).remove()
});