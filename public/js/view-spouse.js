$(document).ready(function () {
    $('#confirm-button').hide();
    var cardContainer = $(".card-items")
    var showSelection = $(".card-smallSelection")
    var showUserItems = $('.card-smallSelection2')
    var queryURL = "/api/items";
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (res) {

            res.forEach(function (spouseItem) {
                var spouseQuery  = spouseItem.category;
                if (spouseQuery  === "Spouse") {
                    var pictureIMG = $("<img>");
                    pictureIMG.attr({ "src": spouseItem.picture });
                    var item = spouseItem.item;
                    var description = spouseItem.description;
                    var category = spouseItem.category;
                    var image = pictureIMG;
                    var userNames = spouseItem.User.name;
                    var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons" id=${spouseItem.id}>swap_calls</i></a>`

                    cardContainer.append(
                        `<div class="col s12 m6 l4">` +
                        `<div class="card">` +
                        `<div class="card-image">` +
                        `<img src='${spouseItem.picture}' alt='Item Picture'>` +
                        `<span class="card-title">${item}</span>` + icon +
                        `</div>` +
                        `<div class="card-content ">` +
                        `<p>${description}</p>` + `<p>Category: ${category}<p>` + `<p>Posted by: ${userNames}</p>` +
                        `</div>` +
                        `</div>` +
                        `</div>`);

                }
            });


            var selectedItems = []
            console.log(selectedItems);
            function emptyselectedItemsArr() {
                selectedItems = [];
            }//create array to store user clicked items, also a function to clear the array
            $(document.body).on('click', '.material-icons', function () {
                //on click of the material icons collect the attributes which are set to the ID of the item set by database.
                selectedItems.push($(this).attr('id'));
                console.log(selectedItems);
                var selectOne = selectedItems[0];
                var selectTwo = selectedItems[1];
                if (selectedItems.length == 1) {
                    console.log(selectedItems);
                    //open the modal when user selects one item they want
                    $('.modal').modal("open");
                    $.ajax({
                        url: "/api/items/" + selectOne,
                        method: 'GET'
                    })//calling the item they chose and printing it to the modal
                        .then(function (res) {
                            showSelection.html(`<div class="col s12 m6 l4">` +
                            `<div class="card" id="inner-card">` 
                            +
                                `<div class="card-image">` +
                                `<img src='${res.picture}' alt='Item Picture'>` + `<span class="card-title">${res.item}</span>` +
                                `</div>` +
                                `<div class="card-content ">` +
                                `<p>${res.description}</p>` + `<p>Category: ${res.category}<p>` + `<p>Posted by: ${res.User.name}</p>` +
                                `</div>` +
                                `</div>` +
                                `</div>`)
                        });
                    var queryURL = "/api/users";
                    $.ajax({
                        url: queryURL,
                        method: 'GET'
                    }).then(function (data) {
                        renderUserList(data);
                    });
                    // A function to get users and then render our list of users
                    var userSelect = $("#user");
                    function renderUserList(data) {
                        var rowsToAdd = [];
                        var selectBox = $("#user");
                        for (var i = 0; i < data.length; i++) {
                            selectBox.append(createUserRow(data[i]));
                        }
                    };
                    // Creates the user options in the dropdown
                    function createUserRow(user) {
                        var listOption = $("<option>");
                        listOption.attr("value", user.id);
                        listOption.text(user.name);
                        return listOption;

                    };

                    $('#user').on('change', function () {

                        var userSelectedItem = $(this).val();

                        $.ajax({
                            url: "/api/users/" + userSelectedItem,
                            method: 'GET'
                        })
                            .then(function (res) {

                                res.Items.forEach(function (printUsersItems) {
                                    var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons" id=${printUsersItems.id}>swap_calls</i></a>`

                                    showUserItems.append(`<div class="col s12 m6 l4">` +
                                    `<div class="card" id="inner-card2">` +
                                    `<div class="card-image">` +
                                        `<img src='${printUsersItems.picture}' alt='Item Picture'>` + `<span class="card-title">${printUsersItems.item}</span>` + icon +
                                        `</div>`);
                                });



                            });

                        showUserItems.empty();

                    });
                }
                $(document.body).on('click', '#cancel-button', function () {
                    $('.modal').modal("close");
                    $('#confirm-button').hide();
                    emptyselectedItemsArr();
                    showSelection.empty();
                    userSelect.empty();//clicking cancel on the modal clears the user selection array and closes the modal.
                })
                if (selectedItems.length === 2) {
                    $('#confirm-button').show();
                }
                $(document.body).on('click', '#confirm-button', function () {
                    $.ajax({
                        url: "/api/swap",
                        method: 'POST',
                        data: {
                            selectOne: selectOne,
                            selectTwo: selectTwo
                        }

                    }).then(console.log);
                    //add a loading screen here for 5 seconds then do a reload of the page below:
                   // location.reload()
                   window.location = "/index.html";
                })
            });
        })
});
