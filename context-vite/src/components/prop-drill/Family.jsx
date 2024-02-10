import Parent from "../Parent";
const Family = ({ secret }) => {
  return (
    <div className="family">
      <Parent secret={secret} />
    </div>
  );
};
export default Family;
