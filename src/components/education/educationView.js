import React from 'react';

export default function EducationView(props) {
    return (
        <section id='education' className="section">
            <h2 className="title-section">
                {props.title}
            </h2>
            <p>
                {props.item.title}
            </p>
            <p>Atque aut beatae cupiditate debitis modi, obcaecati odio ratione reprehenderit ut voluptatibus!
                Aliquid delectus dicta eaque explicabo magnam optio recusandae reiciendis repellat repudiandae. Alias
                earum molestiae molestias rem reprehenderit. Tempore.
            </p>

        </section>
    )
}
