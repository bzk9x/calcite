document.getElementById('minimize').addEventListener('mouseenter', function() {
    document.getElementById('tip-minimize').classList.add('tip-visible');
});

document.getElementById('minimize').addEventListener('mouseleave', function() {
    document.getElementById('tip-minimize').classList.remove('tip-visible');
});


document.getElementById('maximize').addEventListener('mouseenter', function() {
    document.getElementById('tip-maximize').classList.add('tip-visible');
});

document.getElementById('maximize').addEventListener('mouseleave', function() {
    document.getElementById('tip-maximize').classList.remove('tip-visible');
});