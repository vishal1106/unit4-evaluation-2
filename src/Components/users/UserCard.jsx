const UserCard = ({dta}) => {



  return (
  <div>
    { dta.map((el)=>{
     return <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.5rem"
      }}
      data-testid="user-card"
      >
      <img
        src={el.avatar}
        width="40px"
        style={{ borderRadius: "50%" }}
        data-testid="user-card-img"
      />
      <div data-testid="user-card-name">
        {el.name}
      </div>
    </div>
    })   
    
    
    }
    </div>
  );
};

export default UserCard;
