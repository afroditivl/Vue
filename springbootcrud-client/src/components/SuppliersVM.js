import Supplier from '@/components/Supplier'

export default {
  components: {
    Supplier
  },
  created () {
    this.refreshSuppliers()
    console.log('Supplier created')
  },
  mounted () {
    this.$events.$on('row-selected', eventData => this.onSupplierSelected(eventData))
    this.$events.$on('supplier-edited', eventData => this.onSupplierEdited(eventData))
    console.log('Supplier mounted')
  },
  beforeDestroy () {
    this.$events.$off('row-selected')
    this.$events.$off('supplier-edited')
  },
  destroyed () {
    console.log('Supplier destroyed')
  },
  data: function () {
    return {
      // url: 'suppliers/search/findByQuery?query=',
      url: 'suppliers',
      query: '',
      suppliers: [],
      fields: [
        {
          name: 'id',
          title: 'Α/Α',
          sortField: 'id'
        },
        {
          name: 'firstName',
          title: 'Όνομα',
          sortField: 'firstName'
        },
        {
          name: 'lastName',
          title: 'Επώνυμο',
          sortField: 'lastName'
        },
        {
          name: 'companyName',
          title: 'Εταιρεία',
          sortField: 'companyName'
        },
        {
          name: 'address',
          title: 'Διεύθυνση',
          sortField: 'address'
        },
        {
          name: 'city',
          title: 'Πόλη',
          sortField: 'city'
        },
        {
          name: 'country',
          title: 'Χώρα',
          sortField: 'country'
        },
        {
          name: 'vatNumber',
          title: 'ΑΦΜ',
          sortField: 'vatNumber'
        }
      ]
    }
  },
  watched: {
    query: function (newValue) {
      this.query = newValue
      console.log(newValue)
      this.refreshSuppliers()
    }
  },
  methods: {
    createSupplier (event) {
      console.log('edit-supplier event')
      this.$events.fire('edit-supplier', null)
    },
    onSupplierSelected (dataItem) {
      console.log('edit-supplier event')
      this.$events.fire('edit-supplier', dataItem)
    },
    onSupplierEdited (dataItem) {
      this.refreshSuppliers()
    },
    refreshSuppliers () {
      this.$http.get(this.url + this.query)
        .then(response => {
          this.suppliers = response.data._embedded.suppliers
        })
        .catch(e => {
          console.log('error: ')
          console.log(e)
        })
    }
  }
}
