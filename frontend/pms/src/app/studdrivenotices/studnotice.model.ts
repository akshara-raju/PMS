export class StudNoticeModel{
    constructor(
        public noticeId:number,
       public company : string,
       public title: string,
    public disc : string,
   public xth : number,
   public xiith : number,
   public  gpa : number,
   public qual : string,
   public deadline: string,
    public ctc :string
    ){}
}