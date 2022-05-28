<script>
    export let name = "John Doe"
    export let title = "Software Engineer"
    export let description = "I am a software engineer with a passion for building software."
    export let img = "https://bulma.io/images/placeholders/1280x960.png"
</script>

<div class="card">
    <div class="card-image">
        <figure class="image is-4by3">
            <img src={img} alt="Placeholder image">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">{name}</p>
                <p class="subtitle is-6">{title}</p>
            </div>
        </div>
        
        <div class="content">
            {description}
            <br>
        </div>
    </div>
</div>