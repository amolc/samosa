var model = {
    families: {
        id: { name: 'id', type: 'id' },
        name: { name: 'name', type: 'varchar(64)', orderBy: true },
        notes: { name: 'description', type: 'varchar(255)' }
    },
    people: {
        id: { name: 'id', type: 'id' },
        name: { name: 'name', type: 'varchar(64)', nullable: true, orderBy: true },
        family: { name: 'family', type: 'families' }
    }
}



var client = require('mysql').createClient({ user: 'root', password: '' });
var db = require('dbcrud').init(client, 'contacts', model);
