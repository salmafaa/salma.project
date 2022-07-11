new Vue({
    el : '#no1',
    data() {
        return {
            isi : '',
            catatan : [],
            isi : '',
            cari: null
            
        }
    },
    computed: {
        caricatatan: function() {
            if(this.cari){
                return this.catatan.filter((ct) => {
                    return this.cari.toLowerCase().split('').every(
                        v =>ct.catatan.toLowerCase().includes(v))
                })
            }else{
                return this.catatan;
            }
        }
    },
    methods: {
        tambah(){
            if(this.isi == ''){
                alert('Catatan Harus diisi')
            }else{
                this.catatan.push({
                    catatan : this.isi,
                    dis : true
                })
            }
            this.isi = ''
        },
        edit(index, val){
            if(val == true){
                this.catatan[index].dis = false
            }else{
                this.catatan[index].dis = true
            }
        },
        hapus(index){
            this.catatan.splice(index,1)
        },
        hapussemua(){
            this.catatan = []
       }
    }
})