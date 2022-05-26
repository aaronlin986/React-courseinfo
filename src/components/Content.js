import Part from "./Part";

const Content = ({parts}) => {
    return (
        <div>
            <Part topic={parts[0].topic} exercises={parts[0].exercises} />
            <Part topic={parts[1].topic} exercises={parts[1].exercises} />
            <Part topic={parts[2].topic} exercises={parts[2].exercises} />
        </div>
    );
}

export default Content;