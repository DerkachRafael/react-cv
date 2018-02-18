import React, {Component} from 'react';

export default class SkillsForm extends Component {

    addItem(e) {
        e.preventDefault();
        const product = {
            name: this.inputSkillName.value,
            range: this.inputSkillRange.value,
        };

        this.props.submitSkills(product);
        this.formSkills.reset();
    }

    renderSkillsList = (skill, index) => {
        const {skills} = this.props;
        return (
            <li key={index}
                className="skills__item"
                style={{width: `${skills[skill].range}%`}}>
                {skills[skill].name}
            </li>
        )
    }

    render() {
        const {skill} = this.props;
        return (
            <section id="skills" className="section">
                <h2 className="title-section">
                    Skills
                </h2>
                <form className="form-skills"
                      action=""
                      ref={formSkills => this.formSkills = formSkills}
                      onSubmit={(e) => this.addItem(e)}>
                    <div className="form-skills__group">
                        <label htmlFor="skillName">
                            Skill Name
                        </label>
                        <input type="text"
                               ref={inputSkillName => this.inputSkillName = inputSkillName}
                               required/>
                    </div>
                    <div className="form-skills__group">
                        <label htmlFor="skillName">
                            Skill Range
                        </label>
                        <input type="number"
                               ref={inputSkillRange => this.inputSkillRange = inputSkillRange}
                               max="100"
                               min="1"
                               required/>
                    </div>
                    <div className="form-skills__group">
                        <button type="submit" className="form-skills__btn">
                            Add Skills
                        </button>
                    </div>
                </form>
                <ul className="skills__list">
                    {
                        Object.keys(this.props.skills)
                        .map(this.renderSkillsList)
                    }
                </ul>

            </section>

        )
    }
}