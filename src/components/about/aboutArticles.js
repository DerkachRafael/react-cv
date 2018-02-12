import React from 'react';

export default function AboutView(props) {
    return (
        <section id='aboutMe' className="section">
            <h2 className="title-section">
                {props.title}
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam atque delectus,
                doloremque, ea enim fugit ipsa iste maxime natus nesciunt non obcaecati officia qui sed sunt tenetur?
                Illo, repellat!
            </p>
            <p>Atque aut beatae cupiditate debitis modi, obcaecati odio ratione reprehenderit ut voluptatibus!
                Aliquid delectus dicta eaque explicabo magnam optio recusandae reiciendis repellat repudiandae. Alias
                earum molestiae molestias rem reprehenderit. Tempore.
            </p>

        </section>
    )
}
