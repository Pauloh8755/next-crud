import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from "../config";


export default class ColecaoCliente implements ClienteRepositorio{
    //Objeto com dois métodos toFirestore para converter classe para oo firestorm 
    // fromFirestore para receber algo do firestore e converter em classe
    #conversor = {
        toFirestore(cliente: Cliente){
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente{
            const data = snapshot.data(options)
            return new Cliente(data.nome, data.idade, snapshot.id)
        }
    }

    //implementando métodos da interface
    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id){
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        }
        else{
            const docRef = await this.colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query =  await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)
    }
}