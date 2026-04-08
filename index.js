const inputText = document.getElementById('input-text');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const avatar = document.getElementById('avatar');
const namee = document.getElementById('namee');
const username = document.getElementById('username');
const follower = document.getElementById('follower');
const followings = document.getElementById('followings')
const repo = document.getElementById('repo');
const link = document.getElementById('link');
const profileCard = document.querySelector('.profile-card');
const err = document.getElementById('err');

btn1.addEventListener('click', async ()=>{

 const inputValue = inputText.value.trim();
 if(inputValue === ''){
    alert('Please enter username!');
    return;
 }
try{
const url = `https://api.github.com/users/${encodeURIComponent(inputValue)}`;
const res = await fetch(url)
    if(!res.ok){
    throw new Error("❌ User not found. Try another username.");
}
  const data =  await res.json();
    console.log(data);
     avatar.src = data.avatar_url;
      avatar.style.display = 'block';
 namee.textContent = data.name;
 namee.style.display = 'block';
 username.textContent = data.login;
 follower.textContent = 'Followers: ' + data.followers;
 followings.textContent = 'Following: '+ data.following;
 repo.textContent = 'Public Repo: ' + data.public_repos;
  btn2.style.display = 'block';
  link.href = data.html_url;
 profileCard.style.display = 'block';
}
catch(error){
    err.textContent = error.message;
     profileCard.style.display = 'none';
}
})
