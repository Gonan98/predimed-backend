import AntecedentType from "./antecedent-type.model";
import Antecedent from "./antecedent.model";
import Department from "./department.model";
import DestinyService from "./destiny-service.model";
import Disease from "./disease.model";
import District from "./district.model";
import Establishment from "./establishment.model";
import History from "./history.model";
import Incidence from "./incidence.model";
import LabExam from "./lab-exam.model";
import NoReferred from "./no-referred.model";
import Patient from "./patient.model";
import Province from "./province.model";
import Referred from "./referred.model";
import Service from "./service.model";
import Specialty from "./specialty.model";
import Symptom from "./symptom.model";
import User from "./user.model";

User.hasMany(Incidence);
Incidence.belongsTo(User);
User.hasMany(Referred);
Referred.belongsTo(User);
User.hasMany(NoReferred);
NoReferred.belongsTo(User);

Establishment.belongsToMany(Specialty, {
  through: "establishment_specialties",
});
Specialty.belongsToMany(Establishment, {
  through: "establishment_specialties",
});
Establishment.belongsToMany(Service, { through: "establishment_services" });
Service.belongsToMany(Establishment, { through: "establishment_services" });
Establishment.belongsToMany(DestinyService, {
  through: "establishment_destiny_services",
});
DestinyService.belongsToMany(Establishment, {
  through: "establishment_destiny_services",
});
Establishment.hasMany(User);
User.belongsTo(Establishment);
Establishment.hasMany(Referred);
Referred.belongsTo(Establishment, {
  foreignKey: {
    name: "sourceEstablishmentCode",
    allowNull: false,
  },
});
Establishment.hasMany(Referred);
Referred.belongsTo(Establishment, {
  foreignKey: {
    name: "destinyEstablishmentCode",
    allowNull: false,
  },
});

DestinyService.hasMany(Referred);
Referred.belongsTo(DestinyService);

Service.hasMany(Referred);
Referred.belongsTo(Service);

Specialty.hasMany(Referred);
Referred.belongsTo(Specialty);

History.hasOne(Referred);
Referred.belongsTo(History);

Department.hasMany(Province);
Province.belongsTo(Department, {
  foreignKey: {
    name: "departmentId",
    allowNull: false,
  },
});
Department.hasMany(District);
District.belongsTo(Department, {
  foreignKey: {
    name: "departmentId",
    allowNull: false,
  },
});

Province.hasMany(District);
District.belongsTo(Province, {
  foreignKey: {
    name: "provinceId",
    allowNull: false,
  },
});

District.hasMany(Establishment);
Establishment.belongsTo(District, {
  foreignKey: {
    name: "ubigeoId",
    allowNull: false,
  },
});
District.hasMany(Patient);
Patient.belongsTo(District, {
  foreignKey: {
    name: "ubigeoId",
    allowNull: false,
  },
});

Patient.hasMany(Referred);
Referred.belongsTo(Patient);
Patient.hasMany(NoReferred);
NoReferred.belongsTo(Patient);
Patient.hasMany(History);
History.belongsTo(Patient, {
  foreignKey: {
    allowNull: false,
  },
});
Patient.hasMany(Antecedent);
Antecedent.belongsTo(Patient, {
  foreignKey: {
    allowNull: false,
  },
});

AntecedentType.hasMany(Antecedent);
Antecedent.belongsTo(AntecedentType, {
  foreignKey: {
    allowNull: false,
  },
});

Symptom.belongsToMany(Referred, { through: "referred_patient_symptopms" });
Referred.belongsToMany(Symptom, { through: "referred_patient_symptopms" });
Symptom.belongsToMany(NoReferred, { through: "no_referred_patient_symptopms" });
NoReferred.belongsToMany(Symptom, { through: "no_referred_patient_symptopms" });

Disease.hasMany(Referred);
Referred.belongsTo(Disease);

Referred.hasMany(LabExam);
LabExam.belongsTo(Referred);
