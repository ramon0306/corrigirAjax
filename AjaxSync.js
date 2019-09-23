
const getFotoGithub = function (username) {
    var username = document.getElementById("username").value;
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            const avatar = ajax.avatar_url;
            document.getElementById("github-avatar").src = avatar;
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};