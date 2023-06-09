const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            randomReplies: [
                'Tutto bene, grazie',
                'Adesso vado a fare la spesa',
                'Cavolo ho perso il cellulare!',
                'Come stai?',
                'Non c\'è problema, ci penso io',
                'Va bene, fai pure'
            ],


            currentUser: {
                name: 'Silvia',
                avatar: './img/admin.png',
                visible: true
            },

            empty: true,
            activeMessage: null,
            newText: '',
            newSearch: '',
            autoReply: '',
            now: '',
            micOpen: true,
            currentTime: new Date(),
            messageDate: '',
            
        }
    },


    methods: {

        
        
        
        addItem(index) {
            if (this.newText != '') {
                const newMessage = this.newText;
                this.contacts[index].messages.push({ date: '/' + this.currentTime.getDate() + '/' + this.currentTime.getMonth() + '/' + this.currentTime.getFullYear() + ' ' + this.currentTime.getHours() + ':' + this.currentTime.getMinutes(), message: newMessage, status: 'sent'});
                setTimeout(() => {
                    autoReply = this.contacts[index].messages.push({ date: '/' + this.currentTime.getDate() + '/' + this.currentTime.getMonth() + '/' + this.currentTime.getFullYear() + ' ' + this.currentTime.getHours() + ':' + this.currentTime.getMinutes(), message: this.randomReplies[Math.floor(Math.random() * (this.randomReplies.length - 1))], status: 'received' });
                }, 3000);
                this.newText = '';
            } else {
                this.newText = '';
            }
        },

        openMessage(index) {
            this.activeMessage = index;
            this.empty = false;
        },


        contactsNoView() {
            this.contacts.forEach(contact => {
                contact.visible = false;
            })
        },
        
        
        resetSearch() {
            this.contacts.forEach(contact => {
                contact.visible = true;
            })
            this.newSearch = '';
        },

        searchUser() {
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },


        
        deleteMessage(index, item) {
            this.contacts[index].messages.splice(this.contacts[index].messages.indexOf(item), 1);
            this.deleted = true;
        },

        

        
    },

    // mounted() {
    //     console.log(this.currentTime);
    //     console.log(this.messageDate = this.currentTime.getDate() + '/' + this.currentTime.getMonth() + '/' + this.currentTime.getFullYear() + ' ' + this.currentTime.getHours() + ':' + this.currentTime.getMinutes())
    // }


    
    

    

}).mount('#app')


/*

- evitare che l'utente possa inviare un messaggio composto solamente
 da spazi
Scrittura del messaggio:


- sotto al nome del contatto nella parte in alto a destra, 
cambiare l'indicazione dello stato: visualizzare il testo 
"sta scrivendo..." nel timeout in cui il pc risponde, poi 
mantenere la scritta "online" per un paio di secondi e infine 
visualizzare "ultimo accesso alle xx:yy" con l'orario corretto
- dare la possibilità all'utente di cancellare tutti i messaggi 
di un contatto o di cancellare l'intera chat con tutti i suoi dati: 
cliccando sull'icona con i tre pallini in alto a destra, si apre un 
dropdown menu in cui sono presenti le voci "Elimina messaggi" ed 
"Elimina chat"; cliccando su di essi si cancellano rispettivamente 
tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) 
oppure l'intera chat comprensiva di tutti i dati del contatto oltre 
che tutti i suoi messaggi (quindi sparisce il contatto anche dalla 
    lista di sinistra)
- dare la possibilità all'utente di aggiungere una nuova conversazione, 
inserendo in un popup il nome e il link all'icona del nuovo contatto
- fare scroll in giù in automatico fino al messaggio più recente, 
quando viene aggiunto un nuovo messaggio alla conversazione 
(NB: potrebbe esserci bisogno di utilizzare 
    nextTick: https://vuejs.org/v2/api/#Vue-nextTick)
- aggiungere le emoticons, tramite l'utilizzo di una libreria, 
ad esempio: https://www.npmjs.com/package/vue-emoji-picker

Grafica
- visualizzare un messaggio di benvenuto che invita l'utente a 
selezionare un contatto dalla lista per visualizzare i suoi messaggi, 
anziché attivare di default la prima conversazione
- aggiungere una splash page visibile per 1s all'apertura dell'app
A) rendere l'app responsive e fruibile anche su mobile: di default 
si visualizza solo la lista dei contatti e cliccando su un contatto 
si vedono i messaggi di quel contatto. 
B) aggiungere quindi un'icona con una freccia verso sinistra 
per tornare indietro, dalla visualizzazione della chat alla 
visualizzazione di tutti i contatti
- aggiungere un'icona per ingrandire o rimpicciolire il font: 
dovrebbe essere sufficiente aggiungere una classe al wrapper principale
- aggiungere un'icona per cambiare la modalità light/dark: 
dovrebbe essere sufficiente aggiungere una classe al wrapper principale

*/