window.addEventListener('DOMContentLoaded', () =>
{
    const mainPage = document.getElementById('page')

    setTimeout(() => mainPage.classList.add('animate-fadeOutDown', 'mt-8'), 8000);

    mainPage.addEventListener('animationend', () =>
    {
        mainPage.classList.remove('animate-fadeOutDown')

        mainPage.classList.remove('mt-20')

        mainPage.innerHTML = `
        <div class="flex flex-row gap-3 md:mt-0 mt-40 read-font font-black">
            <div class="col-start-1">
                <h3 class="text-center">CONFIRMAÇÃO</h3>
                <img src="./img/confirmation.png" class="w-32 md:w-52" alt="QR Code para confirmação">
            </div>
            <div class="ml-8 md:mx-0">
                <h3 class="text-center">LISTA DE PRESENTES</h3>
                <img src="./img/gifts-list.png" class="w-32 md:w-52" alt="QR Code para lista de presentes">
            </div>
            <div>
                <h3 class="text-center">CONTA</h3>
                <img src="./img/pix.png" class="w-32 md:w-52" alt="QR Code envio de PIX">
            </div>
        </div>
        <h2 class="text-xl w-80 text-center read-font font-black mt-6"><span class="text-red-600">ATENÇÃO! </span>Após comprar algo da lista, por favor nos comunicar para que não seja comprado o mesmo presente mais de uma vez</h2>
        `
    })
})