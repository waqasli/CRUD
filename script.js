$(document).ready(function() {
    // Function to get all posts
    function getAllPosts() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#getAllPostsResponse').html(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to get single post
    function getPost(id) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#getPostResponse').html(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to create new post
    function createPost(data) {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function(response) {
                // Handle success response
                $('#createPostResponse').html(JSON.stringify(response));
                // Refresh the list of all posts after creation
                getAllPosts();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to update post
    function updatePost(id, data) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            type: 'PUT',
            dataType: 'json',
            data: data,
            success: function(response) {
                // Handle success response
                $('#updatePostResponse').html(JSON.stringify(response));
                // Refresh the list of all posts after update
                getAllPosts();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to delete post
    function deletePost(id) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            type: 'DELETE',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#deletePostResponse').html(JSON.stringify(response));
                // Refresh the list of all posts after deletion
                getAllPosts();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Example usage
    $('#createPostForm').submit(function(event) {
        event.preventDefault();
        var title = $('#title').val();
        var body = $('#body').val();
        createPost({ title: title, body: body });
    });

    $('#updatePostForm').submit(function(event) {
        event.preventDefault();
        var id = $('#updateId').val();
        var title = $('#updateTitle').val();
        var body = $('#updateBody').val();
        updatePost(id, { title: title, body: body });
    });

    $('#deletePostForm').submit(function(event) {
        event.preventDefault();
        var id = $('#deleteId').val();
        deletePost(id);
    });

    $('#getAllPostsBtn').click(function() {
        getAllPosts();
    });

    $('#getPostBtn').click(function() {
        var id = prompt("Enter Post ID:");
        if (id !== null && id !== "") {
            getPost(id);
        }
    });

    // Initially load all posts when the page loads
    getAllPosts();
});