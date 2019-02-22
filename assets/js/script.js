var products = [
    {
        id: 1,
        name: 'Product #1',
        description: 'Dit is product #1 description',
        price: 10.00,
        image: '1.jpeg'
    },

    {
        id: 2,
        name: 'Product #2',
        description: 'Dit is product #2 description',
        price: 12.00,
        image: '2.jpeg'
    },

    {
        id: 3,
        name: 'Product #3',
        description: 'Dit is product #3 description',
        price: 9.00,
        image: '1.jpeg'
    },

    {
        id: 4,
        name: 'Product #4',
        description: 'Dit is product #4 description',
        price: 11.50,
        image: '2.jpeg'
    },
    {
        id: 5,
        name: 'Product #5',
        description: 'Dit is product #5 description',
        price: 10.00,
        image: '1.jpeg'
    },

    {
        id: 6,
        name: 'Product #6',
        description: 'Dit is product #6 description',
        price: 12.00,
        image: '2.jpeg'
    },
    {
        id: 7,
        name: 'Product #7',
        description: 'Dit is product #7 description',
        price: 9.00,
        image: '1.jpeg'
    },

    {
        id: 8,
        name: 'Product #8',
        description: 'Dit is product #8 description',
        price: 11.50,
        image: '2.jpeg'
    }
];

var news = [
    {
        id: 1,
        title: 'News #1',
        date: '02-20-2019',
        content: '12345667',
        image: '1.jpeg'
    },
    {
        id: 2,
        title: 'News #2',
        date: '02-20-2019',
        content: '12345667',
        image: '1.jpeg'
    },
    {
        id: 3,
        title: 'News #3',
        date: '02-20-2019',
        content: '12345667',
        image: '1.jpeg'
    },
    {
        id: 4,
        title: 'News #4',
        date: '02-20-2019',
        content: '12345667',
        image: '1.jpeg'
    }
]

var shopping_bag = [];

for(var product in products)
{
    var id = product;
    product = products[product];

    $('.products').append(" <div class='product' data-product-open='" + id + "'>" +
                                "<img src='assets/images/products/" + product.image + "'>" +
                                "<h1>" +
                                    product.name +
                                "</h1>" +
                            "</div>");
}

for(var item in news)
{
    var id = item;
    item = news[item];

    $('.news').append(" <div class='item' data-news-open='" + id + "'>" +
                        "<img src='assets/images/products/" + item.image + "'>" +
                            "<h1>" +
                            item.title +
                            "</h1>" +
                        "</div>");
}

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

        if(top > 0) {
            $('.header').addClass('active');
        }
        else {
            $('.header').removeClass('active');
        }
    }
);

$('*').click(
    function()
    {
        var item = $(this);
        var scroll_to = item.data('scroll-to');
        var open_menu = item.data('menu-open');
        var open_product = item.data('product-open');

        if(scroll_to != null) {
            scrollTo(scroll_to);
        }

        if(open_menu != null) {
            if(open_menu == 'shopping_bag') {
                openShoppingBag();
            }
            else {
                openMenu(open_menu);
            }
        }

        if(open_product != null) {
            openProduct(open_product);
        }

        if(open_product != null) {
            openProduct(open_product);
        }
    }
);

function scrollTo(element)
{
    $('html, body').animate({
        scrollTop: $(element).offset().top - 100
    }, 1000);
}

function openMenu(name)
{
    var menu =  $(".menu[data-menu-name='" + name + "']");
    closeMenus();
    menu.addClass('active');
}

function openProduct(product_id)
{
    var product = products[product_id];
    var menu =  $(".menu[data-menu-name='product']");

    closeMenus();
    menu.find('.menu-title').text(product.name);
    menu.find('.menu-description').text(product.description);
    menu.find('.menu-image').attr('src', 'assets/images/products/' + product.image);
    menu.find('.menu-button').unbind();
    menu.find('.menu-button').click(
        function()
        {
            addToBag(product_id);
        }
    );
    menu.addClass('active');
}

function openShoppingBag()
{
    var menu =  $(".menu[data-menu-name='shopping_bag']");
    menu.find('.menu-items').empty();

    for(var item in shopping_bag) {
        item = shopping_bag[item];
        var product = products[item];

        console.log(item);

        menu.find('.menu-items').append("<li>" + product.name + "</li>");
    }
    menu.addClass('active');
}

function closeMenus()
{
    $('.menu').removeClass('active');
}

function addToBag(product_id)
{
    shopping_bag.push(product_id);
    console.log(product_id);
    closeMenus();
    openShoppingBag();
}