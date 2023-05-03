// capture inputs once form is submitted
$('button.sub-but').on('click', function(){
    let title = $('input.movie-title').val();
    let rating = $('input.movie-rating').val();
    let str = `Title: ${title}, Rating: ${rating}`; 

    if(title.length <= 1){
        throw new Error('Please enter a valid title (must be two letters long).');
    }
    if(rating <= 0 || rating > 10){
        throw new Error('Please provide a numbered rating between 1-10.')
    }
    $('<li>' + str + '</li>').appendTo('ul');
    let lastLi = $('li').last();
    $('<button class="clear-but">Clear All</button>').appendTo(lastLi);

    $('input.movie-title').val('');
    $('input.movie-rating').val('');
})

$('div.container').on('click', 'button.clear-but', function(){
    $('button.clear-but').remove();
    $('li').remove();
})