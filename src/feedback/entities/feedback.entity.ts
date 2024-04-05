/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'feedback'})
export class Feedback {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    recievedate:string; 
    @Column()
    recieveByName:string;
    
    @Column()
    designation:string;

    @Column()
    feedbackChannel:string;

    @Column()
    NameAgeNIDInfoShare:string;

    @Column()
    desIssuesSupport:string;

    @Column()
    typeIssues:string;

    @Column()
    incidence:string;
    
    @Column()
    categoryOfFeedback :string;

    @Column({nullable:true})
    feedbackProjectIssues :string;

    @Column({nullable:true, default:'Default'})
    feedbackDepartmentIssues :string;

    @Column({nullable:true, default:'Default'})
    indicateThemeAria:string;

    @Column()
    categoryOfComplaint :string;

    @Column()
    status :string;

    @Column()
    instantResponse :string;
    
    @Column()
    anyDisability:string;
 
    @Column({nullable: true})
    remark :string;


    @Column({nullable: true})
    feedback_giver_name :string;

    @Column({nullable: true})
    feedback_giver_gender :string;

    @Column({nullable: true})
    feedback_giver_age_category :string;

    @Column({nullable: true})
    feedback_giver_contactNumber :string;

    @Column({nullable: true})
    feedback_giver_nationality :string;

    @Column({nullable: true})
    feedback_giver_age_ID :string;

    @Column({nullable: true})
    feedback_giver_age_ScanID :string;

    @Column({nullable: true})
    feedback_giver_age_Adress :string;

    @Column({nullable: true})
    number_of_people_affected :string;

    @Column({nullable: true})
    number_of_hh_affected :string;

    @Column({nullable: true}) 
    project :string;

    @Column({nullable: true})
    department :string;

    @Column({nullable: true})
    kind_of_disabilities :string;



}
