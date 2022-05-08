<template>
  <main class="container py-5">
    <header class="mb-4">
      <h2 class="fs-fac-0.5 m-0">Responsive Font Size System</h2>
      <a href="https://derianandre.com" class="text-muted" target="_blank">
        <small>by @DerianAndre</small>
      </a>
    </header>
    <hr>
    <main>
      <div class="row gx-4">
        <div class="col-12 col-lg">
          <p>
              Using <strong><code>clamp()</code></strong> and <strong><code>var()</code></strong> we can create a simple but yet effective font size system (and we are not limited to just <code>font-size</code> as can be used for other css properties.
          </p>
          <p>
            There are classes for each <strong><code>clamp()</code></strong>  value: <code>fs-min-fac-x</code>, <code>fs-min-fac-x</code>, <code>fs-val-fac-x</code> and a general factor <code>fs-fac-x</code> where <code>x</code> is the factor multiplier.
          </p>
          <p>
            These are the factors: <strong>0.25, 0.375, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2</strong> but you can use <code>--variables</code> in your css to define your own.
          </p>
        </div>
        <div class="col-auto d-none d-lg-flex">  
          <div class="vr"></div>
        </div>
        <div class="col-12 col-lg-auto">
          <ul>
            <li><code>fs-min-fac</code> The minimal value of the font-size</li>
            <li><code>fs-max-fac</code> The maximum value of the font-size</li>
            <li><code>fs-val-fac</code> The ideal value</li>
            <li><code>fs-fac</code> The general factor multiplier</li>
          </ul>
        </div>
      </div>
    </main>
    <hr/>
    <section>
      <h3 class="fs-fac-0.5">Playground</h3>
      <div class="row mb-2">
        <div class="col-12 col-sm-6 col-lg mb-3">
          <div class="form-group">
            <label class="form-label me-2" for="min">Minimum</label> <code>fs-min-fac</code>
            <div class="d-flex align-items-stretch gap-2">
              <div class="form-control d-flex align-items-center">
                <input type="range" class="form-range" id="min" min="0" max="3" step="0.05" v-model="min">
              </div>
              <input type="number" class="form-control" min="0" max="3" step="0.05" style="max-width: 80px" v-model="min">
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg mb-3">
          <div class="form-group">
            <label class="form-label me-2" for="max">Maximum</label> <code>fs-max-fac</code>
            <div class="d-flex align-items-stretch gap-2">
              <div class="form-control d-flex align-items-center">
                <input type="range" class="form-range" id="max" min="0" max="3" step="0.05" v-model="max">
              </div>
              <input type="number" class="form-control" min="0" max="3" step="0.05" style="max-width: 80px" v-model="max">
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg mb-3">
          <div class="form-group">
            <label class="form-label me-2" for="val">Ideal</label> <code>fs-val-fac</code>
            <div class="d-flex align-items-stretch gap-2">
              <div class="form-control d-flex align-items-center">
                <input type="range" class="form-range" id="val" min="0" max="3" step="0.05" v-model="val">
              </div>
              <input type="number" class="form-control" min="0" max="3" step="0.05" style="max-width: 80px" v-model="val">
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg mb-3">
          <div class="form-group">
            <label class="form-label me-2" for="fac">Factor</label> <code>fs-fac</code>
            <div class="d-flex align-items-stretch gap-2">
              <div class="form-control d-flex align-items-center">
                <input type="range" class="form-range" id="fac" min="0" max="3" step="0.05" v-model="fac">
              </div>
              <input type="number" class="form-control" min="0" max="3" step="0.05" style="max-width: 80px" v-model="fac">
            </div>            
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <iframe class="frame" :src="`iframe?min=${min}&max=${max}&val=${val}&fac=${fac}`" width="100%" height="300"></iframe>
      </div>
    </section>
    <hr>
    <section>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id veniam consequatur amet adipisci, neque optio excepturi illum sapiente maiores minus mollitia doloremque voluptates libero aspernatur! Ut architecto rerum deleniti</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id veniam consequatur amet adipisci, neque optio excepturi illum sapiente maiores minus mollitia doloremque voluptates libero aspernatur! Ut architecto rerum deleniti</p>
      <hr>
      <h1 class="fs-fac-0.375 fs-max-fac-0.75 fs-val-fac-1.5 fs-min-fac-1.25">h1 (fs-fac-0.375, fs-max-fac-0.75, fs-val-fac-1.5, fs-min-fac-1.25)</h1>
      <h6 class="fs-max-fac-2 fs-min-fac-1.5">h6 (fs-max-fac-2, fs-min-fac-1.5)</h6>
      <h6 class="fs-max-fac-2 fs-val-fac-1.5">h6 (fs-max-fac-2, fs-val-fac-1.5)</h6>
      <h6 class="fs-fac-1.25">h6 (fs-fac-1.25)</h6>
      <p class="fs-max-fac-1.5"><strong>p (fs-max-fac-1.5)</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quasi eveniet accusantium asperiores, eos optio autem consectetur architecto nesciunt numquam, dolore soluta officia fuga perspiciatis est, doloribus et labore sit.</p>
    </section>
    <hr/>
    <footer>
      <a href="https://derianandre.com" class="text-muted" target="_blank">
        <small>by @DerianAndre</small>
      </a>
    </footer>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        min: 1,
        max: 1,
        val: 1,
        fac: 1,
      }
    }
  }
</script>

<style lang="scss">
  body {
    font-family: "Poppins", sans-serif;
  }
  a {
    color: #333;
  }
  hr {
    margin: 2rem 0;
  }
  code {
    border: 1px solid #777;
    color: #777;
    padding: 0 0.15rem;
    border-radius: 0.25rem;
  }
  ul {
    display: inline-block;
    list-style: none;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      padding: 0.5rem 0.25rem;
      code {
        margin-right: 0.5rem;
      }
    }
    li:not(:last-child) {
      border-bottom: 1px solid #CCC;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  label {
    font-weight: bold;
  }
  .frame {
    padding: 0;
    margin: 0;
    padding: 1rem;
    resize: both;
    overflow: hidden;
    border: 1px solid #CCC;
    border-radius: 0.25rem;
  }
</style>