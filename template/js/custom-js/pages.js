// Add your custom JavaScript for storefront pages here.
storefront.on('widget:@ecomplus/widget-minicart', function () {
    console.log('somos nozes')
    setTimeout(function () {
        console.log('entrei')
        const local = window.location.href
        const whatsappLink = `https://wa.me/5547996985319?text=Ola%20estou%20na%20sua%20Loja Online. Quero saber mais sobre ${local}`
        document.getElementById('whatsapp').href = whatsappLink
    }, 800);
  });
