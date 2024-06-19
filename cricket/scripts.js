<script>
    function showTeamList() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('team').style.display = 'block';
    }

    function showPlayerDetail(name, role, photo, age, mob) {
        document.getElementById('player-detail-name').innerText = name;
        document.getElementById('player-detail-role').innerText = role;
        document.getElementById('player-detail-photo').src = photo;
        document.getElementById('player-detail-age').innerText = 'Age: ' + age;
        document.getElementById('player-detail-mob').innerText = 'Mobile: ' + mob;
        document.getElementById('player-detail').style.display = 'block';
        document.getElementById('player-detail-photo').style.width = '20%'; // Ensure image fills the container
        document.getElementById('player-detail-photo').style.height = 'auto'; // Maintain aspect ratio
    }
</script>
