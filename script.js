$(document).ready(function() {
    // Function to get all players (employees)
    function getAllPlayers() {
        $.ajax({
            url: 'https://dummy.cricketapi.com/api/v1/players',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#getAllEmployeesResponse').html(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to get single player (employee) by ID
    function getPlayer(id) {
        $.ajax({
            url: `https://dummy.cricketapi.com/api/v1/players/${id}`,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#getEmployeeResponse').html(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to create new player (employee) record
    function createPlayer(data) {
        $.ajax({
            url: 'https://dummy.cricketapi.com/api/v1/players',
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function(response) {
                // Handle success response
                $('#createEmployeeResponse').html(JSON.stringify(response));
                // Refresh the list of all players after creation
                getAllPlayers();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to update player (employee) record
    function updatePlayer(id, data) {
        $.ajax({
            url: `https://dummy.cricketapi.com/api/v1/players/${id}`,
            type: 'PUT',
            dataType: 'json',
            data: data,
            success: function(response) {
                // Handle success response
                $('#updateEmployeeResponse').html(JSON.stringify(response));
                // Refresh the list of all players after update
                getAllPlayers();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to delete player (employee) record
    function deletePlayer(id) {
        $.ajax({
            url: `https://dummy.cricketapi.com/api/v1/players/${id}`,
            type: 'DELETE',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#deleteEmployeeResponse').html(JSON.stringify(response));
                // Refresh the list of all players after deletion
                getAllPlayers();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Example usage
    $('#createEmployeeForm').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var salary = $('#salary').val();
        createPlayer({ name: name, salary: salary });
    });

    $('#updateEmployeeForm').submit(function(event) {
        event.preventDefault();
        var id = $('#updateId').val();
        var name = $('#updateName').val();
        var salary = $('#updateSalary').val();
        updatePlayer(id, { name: name, salary: salary });
    });

    $('#deleteEmployeeForm').submit(function(event) {
        event.preventDefault();
        var id = $('#deleteId').val();
        deletePlayer(id);
    });

    $('#getAllEmployeesBtn').click(function() {
        getAllPlayers();
    });

    $('#getEmployeeBtn').click(function() {
        var id = prompt("Enter Player ID:");
        if (id !== null && id !== "") {
            getPlayer(id);
        }
    });

    // Initially load all players when the page loads
    getAllPlayers();
});
