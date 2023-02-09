// console.log('JS OK');
// console.log('Vue OK', Vue);

const { createApp } = Vue;

const apiUri = 'http://localhost:8888/php-dischi-json/api.php';

const app = createApp({
nome: "AppDisk",
data(){
    return {
        disks: []
    }
}, 

created (){
    axios.get(apiUri).then(res => {
        this.disks = res.data;
    });
}
});

app.mount('#root');