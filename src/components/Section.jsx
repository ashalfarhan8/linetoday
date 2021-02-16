import classNames from "classnames";
import Card from "./Card";
export default function Section({ template, key }) {
  return (
    <div key={key} className="mb-24 mt-2">
      {template.sections && (
        <h1
          className={classNames(
            "text-3xl rounded-sm font-montserrat py-4 px-2.5",
            {
              "bg-blue-500 text-white": template.type === 63,
              "bg-red-500 text-white": template.type === 59,
              "bg-green-200": template.type === 6304,
            }
          )}
        >
          {template.title}
        </h1>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 w-full">
        {template.sections &&
          template.sections.map((section) => {
            if (section.articles) {
              return section.articles.slice(0, 6).map((article) => {
                return <Card article={article} key={article.id} />;
              });
            }
          })}
      </div>
    </div>
  );
}
