var products = [
    {
        id: 1,
        name: 'Product #1',
        price: 24.99,
        description: 'Dit is een product test beschrijving.',
        image: 'product.jpeg'
    },
    {
        id: 2,
        name: 'Product #2',
        price: 24.99,
        description: 'Dit is een product test beschrijving.',
        image: 'product.jpeg'
    },
    {
        id: 3,
        name: 'Product #3',
        price: 24.99,
        description: 'Dit is een product test beschrijving.',
        image: 'product.jpeg'
    },
    {
        id: 4,
        name: 'Product #4',
        price: 24.99,
        description: 'Dit is een product test beschrijving.',
        image: 'product.jpeg'
    },
    {
        id: 5,
        name: 'Product #5',
        price: "24,99",
        description: 'Dit is een product test beschrijving.',
        image: 'product.jpeg'
    },
    {
        id: 6,
        name: 'Product #6',
        price: 24.99,
        description: 'Dit is een product test beschrijving.',
        image: 'product.jpeg'
    }
];
var news = [
    {
        id: 1,
        name: 'News #1',
        content: 'Dit is de news content van bericht #1',
        image: 'news.jpeg'
    },
    {
        id: 2,
        name: 'News #2',
        content: 'Dit is de news content van bericht #2',
        image: 'news.jpeg'
    },
    {
        id: 3,
        name: 'News #3',
        content: 'Dit is de news content van bericht #3',
        image: 'news.jpeg'
    },
];
var shopping_cart = [

];

for(var product in products)
{
    product = products[product];

    $('.products').append(  "<div class='product'>" +
                                "<img src='assets/images/products/" + product.image + "' class='product-banner'>" +

                                "<h1 class='product-price'>" +
                                    "€" + product.price + ",-" +
                                "</h1>" +

                                "<h1 class='product-title'>" +
                                    product.name +
                                "</h1>" +

                                "<button class='product-button' data-product-id='" + product.id + "'>" +
                                    "TOEVOEGEN" +
                                "</button>" +
                            "</div>");
}

for(var message in news)
{
    message = news[message];

    $('.messages').append(  "<div class='message'>" +
                                "<img src='assets/images/news/" + message.image + "' class='message-banner'>" +

                                "<h1 class='message-title'>" +
                                    message.name +
                                "</h1>" +

                                "<h1 class='message-description'>" +
                                    message.content.substr(0, 25) + "..." +
                                "</h1>" +

                                "<button class='message-button' data-open-menu='product'>" +
                                    "BEKIJKEN" +
                                "</button>" +
                            "</div>");
}

$('.product-button').click(
    function()
    {
        var id = $(this).data('product-id');

        if(shopping_cart[id] != null) {
            shopping_cart[id] += 1;
        }
        else {
            shopping_cart[id] = 1;
        }

        updateShoppingCart();
        openMenu('shopping_cart');
    }
);

$('.header-small-icon').click(
    function()
    {
        var navigator = $('.header-small-navigator');
        var icon = $('.header-small-icon');

        if(navigator.hasClass('active')) {
            navigator.removeClass('active');
            icon.text('☰');
        }
        else {
            navigator.addClass('active');
            icon.text('✖');
        }
    }
);

$('*').click(
    function()
    {
        var scroll_to = $(this).data('scroll-to');
        var open_menu = $(this).data('open-menu');

        if(scroll_to != null) {
            scrollTo(scroll_to);
        }

        if(open_menu != null) {
            openMenu(open_menu);
        }
    }
);

$('.menu-close').click(
    function()
    {
        closeMenus();
    }
);

$(window).scroll(
    function()
    {
        var top = $(this).scrollTop();

        if(top > 100) {
            $('.header-logo').css('height', '100px');
        }
        else {
            $('.header-logo').css('height', '160px');
        }
    }
);

function updateShoppingCart()
{
    var total = 0;

    $('.cart-tablenames tbody').html("");

    for(var key in shopping_cart) {
        var current = null;
        var value = shopping_cart[key];

        for(var product in products) {
            product = products[product];

            if(product.id = key) {
                current = product;
            }
        }

        total += (value * current.price);

        $('.cart-tablenames tbody').append("  <tr>" +
                                        "<td><label class='cart-product-name'>" +
                                        current.name +
                                        "</label></td>" +
                                        "" +
                                        "<td><label class='cart-product-price'>" +
                                        current.price +
                                        "</label></td>" +
                                        "" +
                                        "<td><label class='cart-product-quantity'>" +
                                            value +
                                        "</label></td>" +
                                        "</tr>");
    }

    $('.total-price-value').text(total);
}

function scrollTo(to)
{
    var element = $(to);

    if(element.length) {
        $('html, body').animate(
            {
                scrollTop: $(element).offset().top - 100
            }, 1000
        );
    }
}

function openMenu(menu)
{
    $('.menu').removeClass('active');
    $(".menu[data-menu-name='" + menu + "']").addClass('active');
}

function closeMenus()
{
    $('.menu').removeClass('active');
}