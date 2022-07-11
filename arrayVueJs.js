var tugas = new Vue ({
    el: '#tugas',
    data: {
        isi: '',
        cari: '',
        buku: ['Bulan', 'Bumi', 'Matahari'],
        bukulain: [
            {judul: 'BloodFever', penulis: 'Charlie Higson', stock: true},
            {judul: 'Just After Sunset', penulis: 'Stephen King', stock: true},
            {judul: 'Under The Dome', penulis: 'Stephen King', stock: false},
            {judul: 'The Graveyard Book', penulis: 'Neil Gaiman', stock: true}
        ]
    },
    methods: {
        tambah: function() {
            this.buku.push(this.isi)
            this.isi = ''
        },
        hapus(index) {
            this.buku.splice(index, 1)
        }
    },
    computed: {
        bukuAda() {
            return this.bukulain.filter(bl => bl.stock)
        },
        bukuHabis() {
            return this.bukulain.filter(bl => !bl.stock)
        },
        filterbukulain: function() {
            return this.bukulain.filter((bl) => {
                return bl.penulis.match(this.cari)
            });
        }
    }
})