Vue.component('project-card', {

    props: ['img','width', 'title','description','version', 'link'],
    template: `
    

        <div class="div-project">

          <div class="wrapper-project">

            <img v-bind:src="img" v-bind:width="width" height="auto">

            <h3>{{ title }}</h3>

            <div class="project-paragraph text-left">

              <p class="h5 justify-content-left">{{ description }}
              </p>

              <h5 class="mt-4">Actual Version: {{ version }}</h5>

              <div class="row justify-content-center">
                <a class="github-project" v-bind:href="link"><img src="assets/images/projects/github-project.svg"></a>
              </div>

            </div>

          </div>

        </div>
    
    `
})

new Vue({

    el: '#app'

});