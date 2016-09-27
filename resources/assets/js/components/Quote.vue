<template>
  <div class="Quote col-md-6 col-md-offset-3">

    <div class="Quote__box">
      <div class="Quote__text">
        <i class="fa fa-quote-left" aria-hidden="true"></i>
        <span>{{ quote.text }}</span>
      </div>

      <div class="Quote__author pull-right">
        <span class="author">-  {{ quote.author }}</span>
      </div>

      <div class="Quote__buttons">
        <a
                id="twitter-quote"
                class="pull-left btn btn-primary"
                v-bind:style="{ backgroundColor:  activeColor, borderColor: activeColor }"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <button
                type="button"
                id="new-quote"
                class="btn btn-primary pull-right"
                @click.prevent="newQuote"
                v-bind:style="{ backgroundColor:  activeColor, borderColor: activeColor }"
        >New Quote
        </button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        quote: {
          text: '',
          author: ''
        },
        colors: ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#fb6964', '#342224', '#472e32', '#bdbb99', '#77b1a9', '#73a857'],
        activeColor: ''
      }
    },

    ready () {
      this.getQuote()
    },

    methods: {
      getQuote () {
        this.$http.get('http://quotes.stormconsultancy.co.uk/random.json').then(res => {
          this.quote.author = res.body.author
          this.quote.text = res.body.quote
        }).catch(err => {
          console.log(err)
        })
        this.activeColor = this.randomColor()
        document.body.style.backgroundColor = this.activeColor
      },

      newQuote () {
        this.getQuote()
      },

      // return random color from colors array
      randomColor () {
        let colorNumber = Math.floor(Math.random() * this.colors.length)
        return this.colors[colorNumber]
      }
    }
  }
</script>

<style lang="scss">
  .Quote {
    background-color: #fff;
    margin-top: 15%;
    border-radius: 5px;
    padding-top: 30px;
    padding-bottom: 30px;
    .Quote__box {
      width: 450px;
      padding-left: 60px;
    }
    .Quote__text {
      text-align: center;
      i.fa-quote-left {
        margin-right: 6px;
        font-size: 30px;
      }
    }
    .Quote__author {
      font-style: italic;
    }
    .Quote__buttons {
      margin-top: 40px;
    }
  }
</style>