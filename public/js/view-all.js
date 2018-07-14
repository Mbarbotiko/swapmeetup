$(document).ready(function () {
    $('#confirm-button').hide();
    var cardContainer = $(".card-items")
    var showSelection = $(".card-smallSelection")
    var showUserItems = $('.card-smallSelection2')
    var queryURL = "/api/items";
    $('#dropdown1 li').on('click', function () {
        cardContainer.empty();
        var selectedDropValue = $(this).attr('id')
        console.log(selectedDropValue);
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .then(function (res) {

                res.forEach(function (showAll) {
                    var pictureIMG = $("<img>");
                    pictureIMG.attr({ "src": showAll.picture });
                    var item = showAll.item;
                    var description = showAll.description;
                    var category = showAll.category;
                    var image = pictureIMG;
                    var userNames = showAll.User.name;
                    var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons" id=${showAll.id}>swap_calls</i></a>`
                    if (category === selectedDropValue|selectedDropValue === "All-Items") {//on drop down selection appending category items, or appending all items
                     function appendAll() {
                            cardContainer.append(
                                ` <div class="col s12 m7">
                          <div class="card">
                            <div class="card-image">
                              <img src='${showAll.picture}' alt='Item Picture'>
                              <span class="card-title">${item}</span>` + icon +
                                `</div>
                            <div class="card-content">`+
                                `<p>${description}</p>` + `<p>Category: ${category}<p>` + `<p>Posted by: ${userNames}</p>` +
                                `</div>
                            
                          </div>
                        </div>`
                            );
                            
                        }
                        appendAll();

                    }

                })


            });


        var selectedItems = []
        function emptyselectedItemsArr() {
            selectedItems = [];
        }//create array to store user clicked items, also a function to clear the array
        $(document.body).on('click', '.material-icons', function () {
            //on click of the material icons collect the attributes which are set to the ID of the item set by database.
            selectedItems.push($(this).attr('id'));
            var selectOne = selectedItems[0];
            var selectTwo = selectedItems[1];
            if (selectedItems.length == 1) {
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

                //user entry form
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
                //user drop down
                $('#user').on('change', function () {

                    var userSelectedItem = $(this).val();

                    $.ajax({
                        url: "/api/users/" + userSelectedItem,
                        method: 'GET'
                    })
                        .then(function (res) {
                            showUserItems.empty()

                            res.Items.forEach(function (printUsersItems) {
                                var icon = `<a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons" id=${printUsersItems.id}>swap_calls</i></a>`

                                showUserItems.append(`<div class="col s12 m6 l4">` +
                                    `<div class="card" id="inner-card2">` +
                                    `<div class="card-image">` +
                                    `<img src='${printUsersItems.picture}' alt='Item Picture'>` + `<span class="card-title">${printUsersItems.item}</span>` + icon +
                                    `</div>`
                                    + `</div>`);
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
                userSelect.empty();
                showUserItems.empty();//clicking cancel on the modal clears the user selection array and closes the modal.
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
                window.location = "/view.html";
            })
        });
    })
});


