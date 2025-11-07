
let customers = [
    { id: 1, nome: "GitHub", site: "https://github.com" },
    { id: 2, nome: "Google", site: "https://google.com" },
    { id: 3, nome: "Uol", site: "https://uol.com.br" },
    { id: 4, nome: "Facebook", site: "https://facebook.com.br" }
];

class CustomersController {

    // listagem dos Customer
    index(req, res) {
        return res.json(customers);
    }

    // recupera um Customer
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id); //retorna o array do objeto igual ao ID solicitado na requisição 

        const status = customer ? 200 : 404;

        return res.status(status).json(customer);
    }

    // cria um novo Customer
    create(req, res) {
        const { name, site } = req.body;
        const id = customers[customers.length - 1].id + 1;

        const newCustomer = { id, name, site };

        customers.push(newCustomer);  // adiciona um cliente na lista
        return res.status(201).json(newCustomer)
    }

    // atualiza um Customer
    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;

        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers[index] = { id: parseInt(id), name, site }; // atualiza o cliente no index desejado
        }

        return res.status(status).json(customers[index])
    }

    // deleta um Customer
    destroy(req, res) {
        const id = parseInt(req.params.id);
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers.splice(index, 1); // splice deleta o objeto no index desejado e o segundo parametro indica a quantidade de itens que serão excluídos 
        }

        return res.status(status).json()
    }
}

module.exports = new CustomersController();