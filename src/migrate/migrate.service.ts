import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
const oracledb = require('oracledb');
import *as moment from 'moment'
import { CITYMASTER } from '../entity/entity/city-master.entity';
import { ACMASTER } from '../entity/entity/gl-account-master.entity';
import { ACCOHEAD } from '../entity/entity/gl-statement-code.entity';
import { ADVOCATEMASTER } from '../entity/entity/advocate-master.entity';
import { AUTHORITYMASTER } from '../entity/entity/authority-master.entity';
import { BANKMASTER } from '../entity/entity/bank-master.entity';
import { BRANCHMASTER } from '../entity/entity/clearing-branch-master.entity';
import { CASTMASTER } from '../entity/entity/cast-master.entity';
import { CATEGORYMASTER } from 'src/entity/entity/category-master.entity';
import { DEPRCATEGORY } from '../entity/entity/depriciation-category-master.entity';
import { DEPRRATE } from 'src/entity/entity/depriciation-rate-master.entity';
import { DIRECTORMASTER } from '../entity/entity/director-master.entity';
import { HOLIDAYSMASTER } from 'src/entity/entity/holiday.entity';
import { HEALTHMASTER } from 'src/entity/entity/health-master.entity';
import { INDUSTRYMASTER } from '../entity/entity/industry-master.entity';
import { INSUARANCEMASTER } from '../entity/entity/insurance-master.entity';
import { INTCATEGORYMASTER } from 'src/entity/entity/interest-category-master.entity';
import { INTRATESBPG } from 'src/entity/entity/saving-and-pigmy-interest-rates.entity';
import { ITEMMASTER } from 'src/entity/entity/dead-stock-master.entity';
import { LOANSTAGEMASTER } from '../entity/entity/loan-stage-master.entity';
import { NARRATIONMASTER } from '../entity/entity/narration.entity';
import { OCCUPATIONMASTER } from 'src/entity/entity/ocuupation-master.entity';
import { OPERATIONMASTER } from '../entity/entity/operation-master.entity';
import { PGCOMMISSIONMASTER } from 'src/entity/entity/PGCOMMISSIONMASTER.entity';
import { PRIORITYMASTER } from 'src/entity/entity/PRIORITYMASTER.entity';
import { PURPOSEMASTER } from 'src/entity/entity/purpose-master.entity';
import { REPORTTYPEMASTER } from '../entity/entity/report-type-master.entity';
import { SCHEMAST } from 'src/entity/entity/schemeParameters.entity';
import { IDMASTER } from 'src/entity/entity/customer-id.entity';
import { CUSTOMERADDRESS } from 'src/entity/entity/customer-address.entity';
import { SHMASTER } from 'src/entity/entity/share-master.entity';
import { DPMASTER } from 'src/entity/entity/dpmaster.entity';
import { LNMASTER } from '../entity/entity/term-loan-master.entity';
import { LNACINTRATE } from 'src/entity/entity/lnacintrate.entity';
import { GUARANTERDETAILS } from 'src/entity/entity/guarantor.entity';
import { PGMASTER } from 'src/entity/entity/pgmaster.entity';
import { ACCOTRAN } from 'src/entity/entity/accotran.entity';
import { DEPOTRAN } from '../entity/entity/depotran.entity';
import { LOANTRAN } from '../entity/entity/loantran.entity';
import { SHARETRAN } from '../entity/entity/sharetran.entity';
import { PIGMYTRAN } from '../entity/entity/pigmytran.entity';
import { HISTORYTRAN } from 'src/entity/entity/HISTORYTRAN.entity';
import { DAILYTRAN } from '../entity/entity/voucher.entity';
import { TRANINPUTHEAD } from 'src/entity/entity/transcation-input-gl-head-setting.entity';
import { HISTORYDIVIDEND } from 'src/entity/entity/shares-dividend.entity';
import { NOMINEELINK } from 'src/entity/entity/nominee.entity';
import { ATTERONEYLINK } from 'src/entity/entity/power-of-attorney.entity';
import { JointAcLink } from 'src/entity/entity/joint-account.entity';
import { TERMINTRATE } from 'src/entity/entity/rate-for term.entity';
import { INTRATETD } from '../entity/entity/interest-rate-for-term-deposit.entity';
import { INTRATETDMULTI } from '../entity/entity/deposit-intrest-rate.entity';
import { INTMULTI } from '../entity/entity/slab-int.entity';
import { INTRATELOAN } from '../entity/entity/interest-rate-for-loan-and-cc.entity';
import { LNCCLOAN } from '../entity/entity/loan-and-cc.entity';
import { INTRATEPATSCHEMES } from '../entity/entity/pat-scheme-interest-rates.entity';
import { INTRATE } from '../entity/entity/interest-rate.entity';
import { PREMATULESSRATE } from 'src/entity/entity/premature-pigmy-less-int-rate.entity';
import { PREMATULESS } from '../entity/entity/pigmy-less-int.entity';
import { SECURITYMASTER } from 'src/entity/entity/security-code.entity';
import { TDSRATE } from 'src/entity/entity/tds-interest-rate.entity';
import { SECURITYDETAILS } from 'src/entity/entity/security.entity';
import { COBORROWER } from 'src/entity/entity/coborrower.entity';
import { BANKDETAILS } from 'src/entity/entity/BANKDETAILS.entity';
import { COURTMASTER } from 'src/entity/entity/court-master.entity';
import { DOCUMENTMASTER } from 'src/entity/entity/document-master.entity';
import { ITEMCATEGORYMASTER } from '../entity/entity/item-category-master.entity';
import { LOCKERRACKMASTER } from 'src/entity/entity/locker-rack-master.entity';
import { LOCKERSIZE } from 'src/entity/entity/locker-size-master.entity';
import { LOCKERMASTER } from '../entity/entity/locker-rackwise-master.entity';
import { BALACATA } from '../entity/entity/minimum-balance-master.entity';
import { OWNBRANCHMASTER } from '../entity/entity/own-branch-master.entity';
import { PREFIX } from 'src/entity/entity/prefix-master.entity';
import { PRIORITYSECTORMASTER } from '../entity/entity/priority-sector-master.entity';
import { RECOVERYCLEARKMASTER } from 'src/entity/entity/recovery-cleark-master.entity';
import { RISKCATEGORYMASTER } from 'src/entity/entity/risk-category.entity';
import { SALARYDIVISIONMASTER } from 'src/entity/entity/salary-division-master.entity';
import { SUBSALARYMASTER } from '../entity/entity/sub-salary-division-master.entity';
import { WEAKERMASTER } from '../entity/entity/weaker-master.entity';
import { TDSFORMSUBMIT } from 'src/entity/entity/tds-form.entity';
import { NPAMASTER } from '../entity/entity/npa-classification.entity';
import { NPACLASSIFICATION } from 'src/entity/entity/npa-class.entity';
import { TDRECEIPTMASTER } from 'src/entity/entity/td-receipt-type.entity';
import { BOOKDEBTS } from '../entity/entity/book-debts.entity';
import { SECINSURANCE } from 'src/entity/entity/customer-insurance.entity';
import { FIREPOLICY } from 'src/entity/entity/fire-policy.entity';
import { FURNITURE } from 'src/entity/entity/furniture-and-fixture.entity';
import { GOLDSILVER } from 'src/entity/entity/gold-and-silver.entity';
import { GOVTSECULIC } from 'src/entity/entity/govt-security-and-lic.entity';
import { LANDBUILDING } from 'src/entity/entity/land-and-buildings.entity';
import { MARKETSHARE } from 'src/entity/entity/market-shares.entity';
import { OTHERSECURITY } from 'src/entity/entity/other-security.entity';
import { OWNDEPOSIT } from 'src/entity/entity/own-deposits.entity';
import { PLANTMACHINARY } from 'src/entity/entity/plant-and-machinery.entity';
import { PLEDGESTOCK } from '../entity/entity/pleadge-stock.entity';
import { STOCKSTATEMENT } from 'src/entity/entity/stock-statement.entity';
import { VEHICLE } from 'src/entity/entity/vehicle.entity';
import { RENEWALHISTORY } from '../entity/entity/RENEWALHISTORY.entity';
import { SYSPARA } from '../entity/entity/system-master-parameters.entity';
import { DIVPAIDTRAN } from '../entity/entity/DIVPAIDTRAN.entity';
import { INTINSTRUCTION } from '../entity/entity/interest-instruction.entity';
import { TODTRAN } from '../entity/entity/over-draft.entity';
import { SPECIALINSTRUCTION } from '../entity/entity/special-instruction.entity';
import { STANDINSTRUCTION } from 'src/entity/entity/standing-instruction.entity';
import { INTERESTTRAN } from 'src/entity/entity/INTERESTTRAN.entity'
import { COMMISSIONSLAB } from '../entity/entity/COMMISSIONSLAB.entity';
import { TEMPJOINTACLINK } from '../entity/entity/tempjointaclink.entity'
import { SIZEWISEBALANCE } from '../entity/entity/SIZEWISEBALANCE.entity'
import { TERMMASTER } from '../entity/entity/termmaster.entity'
import { AGENTCHANGEHISTORY } from '../entity/entity/AGENTCHANGEHISTORY.entity'
import { BANKBRANCHMASTER } from '../entity/entity/BANKBRANCHMASTER.entity'
import { BANKCOMMISSION } from '../entity/entity/BANKCOMMISSION.entity'
import { BANKDEPOTRAN } from '../entity/entity/BANKDEPOTRAN.entity'
import { BATCHVOUCHERTRAN } from '../entity/entity/BATCHVOUCHERTRAN.entity'
import { BUDGETMASTER } from '../entity/entity/BUDGETMASTER.entity'
import { CASHINTINSTRUCTIONS } from '../entity/entity/CASHINTINSTRUCTIONS.entity'
import { CDRATIO } from '../entity/entity/CDRATIO.entity'
import { CHARGES } from '../entity/entity/scheme-type-charges.entity'
import { CHARGESAMT } from '../entity/entity/charges.entity'
import { CHARGESNOTING } from '../entity/entity/CHARGESNOTING.entity'
import { DAILYSHRTRAN } from '../entity/entity/DAILYSHRTRAN.entity'
import { NPALOCK } from '../entity/entity/NPALOCK.entity'
import { EXCESSCASH } from '../entity/entity/EXCESSCASH.entity'
import { CRARTRAN } from '../entity/entity/CRARTRAN.entity'
import { DENOMINATION } from '../entity/entity/DENOMINATION.entity'
import { USERDENOMINATION } from '../entity/entity/USERDENOMINATION.entity'
import { SCHEMDATA } from '../entity/entity/SCHEMDATA.entity'
import { HISTORYDENO } from '../entity/entity/HISTORYDENO.entity'
import { HISTORYGENERALMEETING } from '../entity/entity/HISTORYGENERALMEETING.entity'
import { INTHISTORYTRAN } from '../entity/entity/INTHISTORYTRAN.entity'
import { TDSTRAN } from '../entity/entity/TDSTRAN.entity'
import { OIRTRAN } from '../entity/entity/OIRTRAN.entity'
import { RECOTRAN } from '../entity/entity/RECOTRAN.entity'
import { TDRECEIPTISSUE } from '../entity/entity/TDRECEIPTISSUE.entity'
import { STANDINSTRUCTIONLOG } from '../entity/entity/STANDINSTRUCTIONLOG.entity'
import { NPADATA } from '../entity/entity/NPADATA.entity'
import { INTINSTRUCTIONSLOG } from '../entity/entity/INTINSTRUCTIONSLOG.entity'
import { PASSBOOKPRINT } from '../entity/entity/PASSBOOKPRINT.entity'
import { PASSBOOKHISTORY } from '../entity/entity/PASSBOOKHISTORY.entity'
import { SUBSIDARYMASTER } from '../entity/entity/SUBSIDARYMASTER.entity'
import { MORATORIUMPERIOD } from '../entity/entity/moratorium-peroid-master.entity'
import { DEADSTOCKDETAIL } from '../entity/entity/DEADSTOCKDETAIL.entity'
import { DEADSTOCKHEADER } from '../entity/entity/DEADSTOCKHEADER.entity'
import { SHARECAPITALAMTDETAILS } from '../entity/entity/SHARECAPITALANTDETAILS.entity'
import { GLREPORTLINK } from '../entity/entity/GLREPORTLINK.entity'
import { GLREPORTMASTER } from '../entity/entity/GLREPORTMASTER.entity'
import { LOCKERTRAN } from '../entity/entity/LOCKERTRAN.entity'
import { LOCKERRENTTRAN } from '../entity/entity/LOCKERRENTTRAN.entity'
import { DEPOCLOSETRAN } from '../entity/entity/DEPOCLOSETRAN.entity'
import { DEPOCLOSETRANSAC } from '../entity/entity/DEPOCLOSETRANSAC.entity'
import { MANAGERVIEW } from '../entity/entity/manager-view-glp.entity'
import { DIVIDEND } from '../entity/entity/DIVIDEND.entity'
import { PIGMYCHARTMASTER } from '../entity/entity/pigmyChart.entity'
import { PIGMYCHART } from '../entity/entity/pigmy-chart.entity'
import { CUSTDOCUMENT } from '../entity/entity/document.entity'
import oracledb from 'oracledb';
import { createWriteStream } from 'fs';
import mime from 'mime-types';
import * as fs from 'fs';
@Injectable()
export class MigrateService {
  constructor(@InjectRepository(CATEGORYMASTER) private readonly CATEGORYMASTERService: Repository<CATEGORYMASTER>,
    @InjectRepository(CUSTDOCUMENT) private CUSTDOCUMENTService: Repository<CUSTDOCUMENT>,
    @InjectRepository(PIGMYCHARTMASTER) private PIGMYCHARTMASTERService: Repository<PIGMYCHARTMASTER>,
    @InjectRepository(PIGMYCHART) private PIGMYCHARTService: Repository<PIGMYCHART>,
    @InjectRepository(DIVIDEND) private DIVIDENDService: Repository<DIVIDEND>,
    @InjectRepository(LOCKERRENTTRAN) private LOCKERRENTTRANService: Repository<LOCKERRENTTRAN>,
    @InjectRepository(LOCKERTRAN) private LOCKERTRANService: Repository<LOCKERTRAN>,
    @InjectRepository(GLREPORTMASTER) private GLREPORTMASTERService: Repository<GLREPORTMASTER>,
    @InjectRepository(GLREPORTLINK) private GLREPORTLINKService: Repository<GLREPORTLINK>,
    @InjectRepository(MANAGERVIEW) private MANAGERVIEWService: Repository<MANAGERVIEW>,
    @InjectRepository(SHARECAPITALAMTDETAILS) private SHARECAPITALAMTDETAILSService: Repository<SHARECAPITALAMTDETAILS>,
    @InjectRepository(DEPOCLOSETRANSAC) private DEPOCLOSETRANSACService: Repository<DEPOCLOSETRANSAC>,
    @InjectRepository(DEPOCLOSETRAN) private DEPOCLOSETRANService: Repository<DEPOCLOSETRAN>,
    @InjectRepository(DEADSTOCKDETAIL) private DEADSTOCKDETAILService: Repository<DEADSTOCKDETAIL>,
    @InjectRepository(DEADSTOCKHEADER) private DEADSTOCKHEADERService: Repository<DEADSTOCKHEADER>,
    @InjectRepository(SUBSIDARYMASTER) private SUBSIDARYMASTERService: Repository<SUBSIDARYMASTER>,
    @InjectRepository(PASSBOOKHISTORY) private PASSBOOKHISTORYService: Repository<PASSBOOKHISTORY>,
    @InjectRepository(MORATORIUMPERIOD) private MORATORIUMPERIODService: Repository<MORATORIUMPERIOD>,
    @InjectRepository(PASSBOOKPRINT) private PASSBOOKPRINTService: Repository<PASSBOOKPRINT>,
    @InjectRepository(INTINSTRUCTIONSLOG) private INTINSTRUCTIONSLOGService: Repository<INTINSTRUCTIONSLOG>,
    @InjectRepository(NPADATA) private NPADATAService: Repository<NPADATA>,
    @InjectRepository(STANDINSTRUCTIONLOG) private STANDINSTRUCTIONLOGService: Repository<STANDINSTRUCTIONLOG>,
    @InjectRepository(TDRECEIPTISSUE) private TDRECEIPTISSUEService: Repository<TDRECEIPTISSUE>,
    @InjectRepository(RECOTRAN) private RECOTRANService: Repository<RECOTRAN>,
    @InjectRepository(OIRTRAN) private OIRTRANService: Repository<OIRTRAN>,
    @InjectRepository(TDSTRAN) private TDSTRANService: Repository<TDSTRAN>,
    @InjectRepository(INTHISTORYTRAN) private INTHISTORYTRANService: Repository<INTHISTORYTRAN>,
    @InjectRepository(HISTORYGENERALMEETING) private HISTORYGENERALMEETINGService: Repository<HISTORYGENERALMEETING>,
    @InjectRepository(HISTORYDENO) private HISTORYDENOService: Repository<HISTORYDENO>,
    @InjectRepository(SCHEMDATA) private SCHEMDATAService: Repository<SCHEMDATA>,
    @InjectRepository(USERDENOMINATION) private USERDENOMINATIONService: Repository<USERDENOMINATION>,
    @InjectRepository(DENOMINATION) private DENOMINATIONService: Repository<DENOMINATION>,
    @InjectRepository(CRARTRAN) private CRARTRANService: Repository<CRARTRAN>,
    @InjectRepository(EXCESSCASH) private EXCESSCASHService: Repository<EXCESSCASH>,
    @InjectRepository(NPALOCK) private NPALOCKService: Repository<NPALOCK>,
    @InjectRepository(CDRATIO) private CDRATIOService: Repository<CDRATIO>,
    @InjectRepository(DAILYSHRTRAN) private DAILYSHRTRANService: Repository<DAILYSHRTRAN>,
    @InjectRepository(CHARGESNOTING) private CHARGESNOTINGService: Repository<CHARGESNOTING>,
    @InjectRepository(CHARGES) private CHARGESService: Repository<CHARGES>,
    @InjectRepository(CHARGESAMT) private CHARGESAMTService: Repository<CHARGESAMT>,
    @InjectRepository(CASHINTINSTRUCTIONS) private CASHINTINSTRUCTIONSService: Repository<CASHINTINSTRUCTIONS>,
    @InjectRepository(BANKBRANCHMASTER) private BANKBRANCHMASTERService: Repository<BANKBRANCHMASTER>,
    @InjectRepository(BANKDEPOTRAN) private BANKDEPOTRANService: Repository<BANKDEPOTRAN>,
    @InjectRepository(BATCHVOUCHERTRAN) private BATCHVOUCHERTRANService: Repository<BATCHVOUCHERTRAN>,
    @InjectRepository(BUDGETMASTER) private BUDGETMASTERService: Repository<BUDGETMASTER>,
    @InjectRepository(BANKCOMMISSION) private BANKCOMMISSIONService: Repository<BANKCOMMISSION>,
    @InjectRepository(PRIORITYSECTORMASTER) private PRIORITYSECTORMASTERService: Repository<PRIORITYSECTORMASTER>,
    @InjectRepository(RECOVERYCLEARKMASTER) private RECOVERYCLEARKMASTERService: Repository<RECOVERYCLEARKMASTER>,
    @InjectRepository(RISKCATEGORYMASTER) private RISKCATEGORYMASTERService: Repository<RISKCATEGORYMASTER>,
    @InjectRepository(SALARYDIVISIONMASTER) private SALARYDIVISIONMASTERService: Repository<SALARYDIVISIONMASTER>,
    @InjectRepository(SPECIALINSTRUCTION) private SPECIALINSTRUCTIONService: Repository<SPECIALINSTRUCTION>,
    @InjectRepository(STANDINSTRUCTION) private STANDINSTRUCTIONService: Repository<STANDINSTRUCTION>,
    @InjectRepository(TODTRAN) private TODTRANService: Repository<TODTRAN>,
    @InjectRepository(INTINSTRUCTION) private INTINSTRUCTIONService: Repository<INTINSTRUCTION>,
    @InjectRepository(DIVPAIDTRAN) private DIVPAIDTRANService: Repository<DIVPAIDTRAN>,
    @InjectRepository(SYSPARA) private SYSPARAService: Repository<SYSPARA>,
    @InjectRepository(INTERESTTRAN) private INTERESTTRANService: Repository<INTERESTTRAN>,
    @InjectRepository(RENEWALHISTORY) private RENEWALHISTORYService: Repository<RENEWALHISTORY>,
    @InjectRepository(VEHICLE) private VEHICLEService: Repository<VEHICLE>,
    @InjectRepository(STOCKSTATEMENT) private STOCKSTATEMENTService: Repository<STOCKSTATEMENT>,
    @InjectRepository(PLEDGESTOCK) private PLEDGESTOCKService: Repository<PLEDGESTOCK>,
    @InjectRepository(PLANTMACHINARY) private PLANTMACHINARYService: Repository<PLANTMACHINARY>,
    @InjectRepository(OWNDEPOSIT) private OWNDEPOSITService: Repository<OWNDEPOSIT>,
    @InjectRepository(OTHERSECURITY) private OTHERSECURITYService: Repository<OTHERSECURITY>,
    @InjectRepository(MARKETSHARE) private MARKETSHAREService: Repository<MARKETSHARE>,
    @InjectRepository(LANDBUILDING) private LANDBUILDINGService: Repository<LANDBUILDING>,
    @InjectRepository(GOVTSECULIC) private GOVTSECULICService: Repository<GOVTSECULIC>,
    @InjectRepository(FURNITURE) private FURNITUREService: Repository<FURNITURE>,
    @InjectRepository(GOLDSILVER) private GOLDSILVERService: Repository<GOLDSILVER>,
    @InjectRepository(FIREPOLICY) private FIREPOLICYService: Repository<FIREPOLICY>,
    @InjectRepository(BOOKDEBTS) private BOOKDEBTSService: Repository<BOOKDEBTS>,
    @InjectRepository(SUBSALARYMASTER) private SUBSALARYMASTERService: Repository<SUBSALARYMASTER>,
    @InjectRepository(TDRECEIPTMASTER) private TDRECEIPTMASTERService: Repository<TDRECEIPTMASTER>,
    @InjectRepository(TDSFORMSUBMIT) private TDSFORMSUBMITService: Repository<TDSFORMSUBMIT>,
    @InjectRepository(WEAKERMASTER) private WEAKERMASTERService: Repository<WEAKERMASTER>,
    @InjectRepository(SECINSURANCE) private SECINSURANCEService: Repository<SECINSURANCE>,
    @InjectRepository(NPAMASTER) private NPAMASTERService: Repository<NPAMASTER>,
    @InjectRepository(NPACLASSIFICATION) private NPACLASSIFICATIONService: Repository<NPACLASSIFICATION>,
    @InjectRepository(PREFIX) private PREFIXService: Repository<PREFIX>,
    @InjectRepository(OWNBRANCHMASTER) private OWNBRANCHMASTERService: Repository<OWNBRANCHMASTER>,
    @InjectRepository(BALACATA) private BALACATAService: Repository<BALACATA>,
    @InjectRepository(LOCKERMASTER) private LOCKERMASTERService: Repository<LOCKERMASTER>,
    @InjectRepository(LOCKERSIZE) private LOCKERSIZEService: Repository<LOCKERSIZE>,
    @InjectRepository(LOCKERRACKMASTER) private LOCKERRACKMASTERService: Repository<LOCKERRACKMASTER>,
    @InjectRepository(DOCUMENTMASTER) private DOCUMENTMASTERService: Repository<DOCUMENTMASTER>,
    @InjectRepository(ITEMCATEGORYMASTER) private ITEMCATEGORYMASTERService: Repository<ITEMCATEGORYMASTER>,
    @InjectRepository(COURTMASTER) private COURTMASTERService: Repository<COURTMASTER>,
    @InjectRepository(BRANCHMASTER) private BRANCHMASTERService: Repository<BRANCHMASTER>,
    @InjectRepository(CASTMASTER) private CASTMASTERService: Repository<CASTMASTER>,
    @InjectRepository(BANKDETAILS) private BANKDETAILSService: Repository<BANKDETAILS>,
    @InjectRepository(BANKMASTER) private BANKMASTERService: Repository<BANKMASTER>,
    @InjectRepository(ADVOCATEMASTER) private ADVOCATEMASTERService: Repository<ADVOCATEMASTER>,
    @InjectRepository(AUTHORITYMASTER) private AUTHORITYMASTERService: Repository<AUTHORITYMASTER>,
    @InjectRepository(COBORROWER) private COBORROWERService: Repository<COBORROWER>,
    @InjectRepository(SECURITYDETAILS) private SECURITYDETAILSService: Repository<SECURITYDETAILS>,
    @InjectRepository(TDSRATE) private TDSRATEService: Repository<TDSRATE>,
    @InjectRepository(SECURITYMASTER) private SECURITYMASTERService: Repository<SECURITYMASTER>,
    @InjectRepository(PREMATULESS) private PREMATULESSService: Repository<PREMATULESS>,
    @InjectRepository(PREMATULESSRATE) private PREMATULESSRATEService: Repository<PREMATULESSRATE>,
    @InjectRepository(INTRATE) private INTRATEService: Repository<INTRATE>,
    @InjectRepository(INTRATEPATSCHEMES) private INTRATEPATSCHEMESService: Repository<INTRATEPATSCHEMES>,
    @InjectRepository(LNCCLOAN) private LNCCLOANService: Repository<LNCCLOAN>,
    @InjectRepository(INTRATELOAN) private INTRATELOANService: Repository<INTRATELOAN>,
    @InjectRepository(INTRATETDMULTI) private INTRATETDMULTIService: Repository<INTRATETDMULTI>,
    @InjectRepository(INTMULTI) private INTMULTIService: Repository<INTMULTI>,
    @InjectRepository(CITYMASTER) private citymasterService: Repository<CITYMASTER>,
    @InjectRepository(NOMINEELINK) private nomineeService: Repository<NOMINEELINK>,
    @InjectRepository(TERMINTRATE) private intRateTDGridRepository: Repository<TERMINTRATE>,
    @InjectRepository(INTRATETD) private intRateTDRepository: Repository<INTRATETD>,
    @InjectRepository(JointAcLink) private jointAccountRepository: Repository<JointAcLink>,
    @InjectRepository(ATTERONEYLINK) private atteroneyService: Repository<ATTERONEYLINK>,
    @InjectRepository(DEPRCATEGORY) private DEPRCATEGORYService: Repository<DEPRCATEGORY>,
    @InjectRepository(DEPRRATE) private DEPRRATEService: Repository<DEPRRATE>,
    @InjectRepository(DIRECTORMASTER) private DIRECTORMASTERService: Repository<DIRECTORMASTER>,
    @InjectRepository(HEALTHMASTER) private HEALTHMASTERService: Repository<HEALTHMASTER>,
    @InjectRepository(HOLIDAYSMASTER) private HOLIDAYSMASTERService: Repository<HOLIDAYSMASTER>,
    @InjectRepository(INDUSTRYMASTER) private INDUSTRYMASTERService: Repository<INDUSTRYMASTER>,
    @InjectRepository(INSUARANCEMASTER) private INSUARANCEMASTERService: Repository<INSUARANCEMASTER>,
    @InjectRepository(INTCATEGORYMASTER) private INTCATEGORYMASTERService: Repository<INTCATEGORYMASTER>,
    @InjectRepository(INTRATESBPG) private INTRATESBPGService: Repository<INTRATESBPG>,
    @InjectRepository(ITEMMASTER) private ITEMMASTERService: Repository<ITEMMASTER>,
    @InjectRepository(LOANSTAGEMASTER) private LOANSTAGEMASTERService: Repository<LOANSTAGEMASTER>,
    @InjectRepository(NARRATIONMASTER) private NARRATIONMASTERService: Repository<NARRATIONMASTER>,
    @InjectRepository(OCCUPATIONMASTER) private OCCUPATIONMASTERService: Repository<OCCUPATIONMASTER>,
    @InjectRepository(OPERATIONMASTER) private OPERATIONMASTERService: Repository<OPERATIONMASTER>,
    @InjectRepository(PGCOMMISSIONMASTER) private PGCOMMISSIONMASTERService: Repository<PGCOMMISSIONMASTER>,
    @InjectRepository(PRIORITYMASTER) private PRIORITYMASTERService: Repository<PRIORITYMASTER>,
    @InjectRepository(PURPOSEMASTER) private PURPOSEMASTERService: Repository<PURPOSEMASTER>,
    @InjectRepository(REPORTTYPEMASTER) private REPORTTYPEMASTERService: Repository<REPORTTYPEMASTER>,
    @InjectRepository(SCHEMAST) private SCHEMASTService: Repository<SCHEMAST>,
    @InjectRepository(IDMASTER) private IDMASTERService: Repository<IDMASTER>,
    @InjectRepository(CUSTOMERADDRESS) private CUSTOMERADDRESSService: Repository<CUSTOMERADDRESS>,
    @InjectRepository(SHMASTER) private SHMASTERService: Repository<SHMASTER>,
    @InjectRepository(DPMASTER) private DPMASTERService: Repository<DPMASTER>,
    @InjectRepository(LNMASTER) private LNMASTERService: Repository<LNMASTER>,
    @InjectRepository(LNACINTRATE) private LNACINTRATEService: Repository<LNACINTRATE>,
    @InjectRepository(GUARANTERDETAILS) private GUARANTERDETAILSService: Repository<GUARANTERDETAILS>,
    @InjectRepository(PGMASTER) private PGMASTERService: Repository<PGMASTER>,
    @InjectRepository(ACCOTRAN) private ACCOTRANService: Repository<ACCOTRAN>,
    @InjectRepository(DEPOTRAN) private DEPOTRANService: Repository<DEPOTRAN>,
    @InjectRepository(LOANTRAN) private LOANTRANService: Repository<LOANTRAN>,
    @InjectRepository(SHARETRAN) private SHARETRANService: Repository<SHARETRAN>,
    @InjectRepository(PIGMYTRAN) private PIGMYTRANService: Repository<PIGMYTRAN>,
    @InjectRepository(HISTORYTRAN) private HISTORYTRANService: Repository<HISTORYTRAN>,
    @InjectRepository(DAILYTRAN) private DAILYTRANService: Repository<DAILYTRAN>,
    @InjectRepository(ACMASTER) private ACMASTERService: Repository<ACMASTER>,
    @InjectRepository(TRANINPUTHEAD) private TRANINPUTHEADService: Repository<TRANINPUTHEAD>,
    @InjectRepository(COMMISSIONSLAB) private COMMISSIONSLABService: Repository<COMMISSIONSLAB>,
    @InjectRepository(TEMPJOINTACLINK) private TEMPJOINTACLINKService: Repository<TEMPJOINTACLINK>,
    @InjectRepository(SIZEWISEBALANCE) private SIZEWISEBALANCEService: Repository<SIZEWISEBALANCE>,
    @InjectRepository(TERMMASTER) private TERMMASTERService: Repository<TERMMASTER>,
    @InjectRepository(HISTORYDIVIDEND) private HISTORYDIVIDENDService: Repository<HISTORYDIVIDEND>,
    @InjectRepository(AGENTCHANGEHISTORY) private AGENTCHANGEHISTORYService: Repository<AGENTCHANGEHISTORY>,
  ) { }
  user = "BANKUSER"
  password = "BANKUSER"
  SID = "BANKDB"
  limit = 1000;
  offset = 0;
  count = 0;
  flag = 0
  BRANCH_CODE
  connectionString = `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(CONNECT_DATA =(SID=${this.SID} )))`
  Postidmaster: any
  PostCategoryMaster: any
  OracleAcMaster: any;
  historyTranCount = 0;
  OracleSchemast: any;
  PostSyspara: any
  PostAcMaster: any;
  PostSchemast: any;
  PostBranch: any
  PostBranchOne: any
  PostInterestCategoryData: any
  PostdirectorMaster: any
  PostCitymaster: any
  async jsonConverter(jsonData) {
    let metadata = jsonData.metaData;
    let rowData = jsonData.rows;

    let finalObject = new Array();

    rowData.forEach((ele, index) => {

      let array = new Array();
      let obj = {}

      ele.forEach((element, index) => {
        let key = metadata[index].name;
        obj[metadata[index].name] = element;
      })
      finalObject.push(obj);
    })
    return finalObject;
  }
  async TableData() {
    this.PostBranch = await this.OWNBRANCHMASTERService.find()
    this.PostBranchOne = await this.OWNBRANCHMASTERService.find({ id: this.BRANCH_CODE })
    this.PostSyspara = await this.SYSPARAService.find()
    this.PostInterestCategoryData = await this.INTCATEGORYMASTERService.find()
    this.Postidmaster = await this.IDMASTERService.find()
    this.PostCategoryMaster = await this.CATEGORYMASTERService.find()
    this.PostdirectorMaster = await this.DIRECTORMASTERService.find()
    this.PostCitymaster = await this.citymasterService.find()
    this.PostSchemast = await this.SCHEMASTService.find()
    this.PostAcMaster = await this.ACMASTERService.find()
    let connection = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let acmaster = await connection.execute(`select * from ACMASTER`);
    this.OracleAcMaster = await this.jsonConverter(acmaster);
    let schemastdata = await connection.execute(`select * from schemast`);
    this.OracleSchemast = await this.jsonConverter(schemastdata);
    await connection.close()
  }
  //start script
  async script(data) {
    this.user = data.user
    this.password = data.password
    this.SID = data.SID
    this.BRANCH_CODE = data.BRANCH_CODE
    // await this.SYSPARA()
    // await this.TableData()
    // await this.SHARECAPITALAMTDETAILS()
    // await this.SCHEMAST()
    // await this.TableData()
    // await this.SCHEMDATA()
    // await this.ACMASTER()
    // await this.TableData()
    // await this.TRANINPUTHEAD()
    // //information 
    // await this.SIZEWISEBALANCE()
    // await this.TERMMASTER()
    // await this.ADVOCATEMASTER()
    // await this.BALACATA()
    // await this.PREFIX()
    // await this.PRIORITYSECTORMASTER()
    // await this.RECOVERYCLEARKMASTER()
    // await this.RISKCATEGORYMASTER()
    // await this.SALARYDIVISIONMASTER()
    // await this.SUBSALARYMASTER()
    // await this.WEAKERMASTER()
    // await this.TDRECEIPTMASTER()
    // await this.AUTHORITYMASTER()
    // await this.LOCKERRACKMASTER()
    // await this.LOCKERSIZE()
    // await this.LOCKERMASTER()
    // await this.ITEMCATEGORYMASTER()
    // await this.DOCUMENTMASTER()
    // await this.BRANCHMASTER()
    // await this.COURTMASTER()
    // await this.CATEGORYMASTER()
    // await this.CASTMASTER()
    // await this.BANKDETAILS()
    // await this.CITYMASTER()
    // await this.BANKMASTER()
    // await this.DEPRCATEGORY()
    // await this.DIRECTORMASTER()
    // await this.HEALTHMASTER()
    // await this.INDUSTRYMASTER()
    // await this.INSUARANCEMASTER()
    // await this.INTCATEGORYMASTER()
    // await this.LOANSTAGEMASTER()
    // await this.NARRATIONMASTER()
    // await this.OCCUPATIONMASTER()
    // await this.OPERATIONMASTER()
    // await this.PRIORITYMASTER()
    // await this.PURPOSEMASTER()
    // await this.REPORTTYPEMASTER()
    // await this.TableData()
    // //utility
    // await this.HOLIDAYSMASTER()
    // await this.PGCOMMISSIONMASTER()
    // // defination
    // await this.intrateTD()
    // await this.INTRATETDMULTI()
    // await this.DEPRRATE()
    // await this.INTRATELOAN()
    // await this.INTRATEPATSCHEMES()
    // await this.PREMATULESSRATE()
    // await this.CHARGES()
    // await this.INTRATESBPG()
    // await this.SECURITYMASTER()
    // await this.TDSRATE()
    // await this.NPAMASTER()
    // await this.TDSFORMSUBMIT()
    // await this.COMMISSIONSLAB()
    // await this.IDMASTER()
    // await this.TableData()
    // await this.ITEMMASTER()
    // await this.SHmasterScript()
    // await this.DPMASTERScript()
    // await this.PGmasterScript()
    // await this.lnmasterScript()
    // //security tables
    // await this.STOCKSTATEMENT()
    // await this.VEHICLE()
    // await this.PLANTMACHINARY()
    // await this.OWNDEPOSIT()
    // await this.PLEDGESTOCK()
    // await this.BOOKDEBTS()
    // await this.OTHERSECURITY()
    // await this.MARKETSHARE()
    // await this.LANDBUILDING()
    // await this.GOLDSILVER()
    // await this.FURNITURE()
    // await this.FIREPOLICY()
    // await this.SECINSURANCE()
    // await this.GOVTSECULIC()
    // // INSTRUCTION
    // await this.SPECIALINSTRUCTION()
    // await this.TODTRAN()
    // await this.STANDINSTRUCTION()
    // await this.INTINSTRUCTION()
    // //transaction
    // await this.DAILYTRAN()
    // await this.HISTORYTRAN()
    // await this.ACCOTRAN()
    // await this.SHARETRAN()
    // await this.LOANTRAN()
    // await this.DEPOTRAN()
    // await this.PIGMYTRAN()
    // await this.DAILYSHRTRAN()
    // await this.RENEWALHISTORY()
    // await this.DEADSTOCKHEADER()
    // await this.DEPOCLOSETRAN()
    // await this.INTERESTTRAN()
    // await this.PIGMYCHART()
    // await this.HISTORYDIVIDEND()
    // await this.DIVPAIDTRAN()
    // await this.DIVIDEND()
    // await this.AGENTCHANGEHISTORY()
    // await this.BANKBRANCHMASTER()
    // await this.BANKCOMMISSION()
    // await this.BANKDEPOTRAN()
    // await this.BATCHVOUCHERTRAN()
    // await this.BUDGETMASTER()
    // await this.CASHINTINSTRUCTIONS()
    // await this.CDRATIO()
    // await this.CHARGESNOTING()
    // await this.NPALOCK()
    // await this.EXCESSCASH()
    // await this.CRARTRAN()
    // await this.DENOMINATION()
    // await this.USERDENOMINATION()
    // await this.HISTORYDENO()
    // await this.HISTORYGENERALMEETING()
    // await this.INTHISTORYTRAN()
    // await this.TDSTRAN()
    // await this.OIRTRAN()
    // await this.MORATORIUMPERIOD()
    // await this.RECOTRAN()
    // await this.TDRECEIPTISSUE()
    // await this.STANDINSTRUCTIONLOG()
    // await this.INTINSTRUCTIONSLOG()
    // await this.NPADATA()
    // await this.PASSBOOKPRINT()
    // await this.PASSBOOKHISTORY()
    // await this.SUBSIDARYMASTER()
    // await this.MANAGERVIEW()
    // await this.GLREPORTLINK()
    // await this.GLREPORTMASTER()
    // await this.LOCKERTRAN()
    // await this.LOCKERRENTTRAN()
    // await this.custdocument()
    // console.log('data conversion successfully completed')
  }

  //syspara
  async SYSPARA() {
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT * FROM SYSPARA')
      let data = await this.jsonConverter(result);
      let ele = data[0]
      let sys = new SYSPARA()
      sys['SYSPARA_CODE'] = ele.SYSPARA_CODE
      sys['BANK_CODE'] = '101'
      sys['BRANCH_CODE'] = this.BRANCH_CODE
      sys['BANK_NAME'] = ele.BANK_NAME
      sys['ADDRESS'] = ele.ADDRESS
      sys['MAX_CERTI_NO'] = ele.MAX_CERTI_NO
      sys['MAX_SHARES_NO'] = ele.MAX_SHARES_NO
      sys['CHAIRMAN'] = ele.CHAIRMAN
      sys['ACCOUNTANT'] = ele.ACCOUNTANT
      sys['GENERAL_MANAGER'] = ele.GENERAL_MANAGER
      sys['COMPANY_START_DATE'] = ele.COMPANY_START_DATE == '' || ele.COMPANY_START_DATE == null ? null : moment(ele.COMPANY_START_DATE).format('DD/MM/YYYY');
      sys['NO_OF_EMPLOYEES'] = ele.NO_OF_EMPLOYEES
      sys['OFFICER_NAME'] = ele.OFFICER_NAME
      sys['OFFICER_DESIGNATION'] = ele.OFFICER_DESIGNATION
      sys['RBI_LICENCE_NO'] = ele.RBI_LICENCE_NO
      sys['MANAGER_NAME'] = ele.MANAGER_NAME
      sys['DD_COMMISSION_ACNO'] = ele.DD_COMMISSION_ACNO
      sys['DIVIDEND_ACNO'] = ele.DIVIDEND_ACNO
      sys['BONUS_GLACNO'] = ele.BONUS_GLACNO
      sys['BILL_RECEIVABLE_ACNO'] = ele.BILL_RECEIVABLE_ACNO
      sys['BILL_FOR_COLLECTION_ACNO'] = ele.BILL_FOR_COLLECTION_ACNO
      sys['BCBR_DR_GLACNO'] = ele.BCBR_DR_GLACNO
      sys['BCBR_DR_SUB_GLACNO'] = ele.BCBR_DR_SUB_GLACNO
      sys['CLG_SUSPENCE_ACNO'] = ele.CLG_SUSPENCE_ACNO
      sys['INWARD_BILL_COLLECTION_ACNO'] = ele.INWARD_BILL_COLLECTION_ACNO
      sys['INWARD_BILL_RECEIVABLE_ACNO'] = ele.INWARD_BILL_RECEIVABLE_ACNO
      sys['RECOVERY_METHOD'] = ele.RECOVERY_METHOD == 0 ? '0' : '1'
      sys['IS_PROCESS_FOR_MONTH'] = ele.IS_PROCESS_FOR_MONTH == 0 ? '0' : '1'
      sys['IS_PROCESS_UPTO_TRANDATE'] = ele.IS_PROCESS_UPTO_TRANDATE == 0 ? '0' : '1'
      sys['IS_ALLOW_CLG_TALLY_VOUCHER'] = ele.IS_ALLOW_CLG_TALLY_VOUCHER == 0 ? '0' : '1'
      sys['IS_CLG_DATE_ADD'] = ele.IS_CLG_DATE_ADD == 0 ? '0' : '1'
      sys['IS_AUTO_CLEARING_EFFECT'] = ele.IS_AUTO_CLEARING_EFFECT == 0 ? '0' : '1'
      sys['AUTO_NO'] = ele.AUTO_NO == 0 ? '0' : '1'
      sys['MASTER_APPROVAL_REQUIRED'] = ele.MASTER_APPROVAL_REQUIRED == 0 ? '0' : '1'
      sys['IS_POSTING_DD_PREPARATION'] = ele.IS_POSTING_DD_PREPARATION == 0 ? '0' : '1'
      sys['IS_AUTO_INSTRUCTION_PASS'] = ele.IS_AUTO_INSTRUCTION_PASS == 0 ? '0' : '1'
      sys['MAINTAIN_CHEQUE_SERIES'] = ele.MAINTAIN_CHEQUE_SERIES == 0 ? '0' : '1'
      sys['PIGMY_IS_AUTO_VOUCHER'] = ele.PIGMY_IS_AUTO_VOUCHER == 0 ? '0' : '1'
      sys['IS_MICR_CHARGES_APPL'] = ele.IS_MICR_CHARGES_APPL == 0 ? '0' : '1'
      sys['IS_GURR_FROM_MEMBERS'] = ele.IS_GURR_FROM_MEMBERS == 0 ? '0' : '1'
      sys['IS_AUTOPOSTDAILY_OVERDRAFT_INT'] = ele.IS_AUTOPOSTDAILY_OVERDRAFT_INT == 0 ? '0' : '1'
      sys['SCHMWISE_REC_IMPEXP'] = ele.SCHMWISE_REC_IMPEXP == 0 ? '0' : '1'
      sys['DENOMINATION_REQUIRE'] = ele.DENOMINATION_REQUIRE == 0 ? '0' : '1'
      sys['TELLER_MODE'] = ele.TELLER_MODE == 0 ? '0' : '1'
      sys['IS_ALLOW_SCHEME_GL_ENTRY'] = ele.IS_ALLOW_SCHEME_GL_ENTRY == 0 ? '0' : '1'
      sys['TOKEN_NO_APPLICABLE'] = ele.TOKEN_NO_APPLICABLE == 0 ? '0' : '1'
      sys['MASTER_ATTACH_JOINT_NAMES'] = ele.MASTER_ATTACH_JOINT_NAMES == 0 ? '0' : '1'
      sys['MASTER_ATTACH_GUARDIAN_NAMES'] = ele.MASTER_ATTACH_GUARDIAN_NAMES == 0 ? '0' : '1'
      sys['PIGMY_AC_RENEW_APPLY'] = ele.PIGMY_AC_RENEW_APPLY == 0 ? '0' : '1'
      sys['IS_RECEIPTNO_IN_PIGMYCHART'] = ele.IS_RECEIPTNO_IN_PIGMYCHART == 0 ? '0' : '1'
      sys['IS_REBIT_INTRATE_CAL'] = ele.IS_REBIT_INTRATE_CAL == 0 ? '0' : '1'
      sys['IS_ALLOW_LOANINT_CHANGE'] = ele.IS_ALLOW_LOANINT_CHANGE == 0 ? '0' : '1'
      sys['IS_CONSIDER_CCRENEWAL_AS_OPEN'] = ele.IS_CONSIDER_CCRENEWAL_AS_OPEN == 0 ? '0' : '1'
      sys['IS_ALLOW_RECOVERY_DIFF'] = ele.IS_ALLOW_RECOVERY_DIFF == 0 ? '0' : '1'
      sys['IS_TDS_CALCULATE'] = ele.IS_TDS_CALCULATE == 0 ? '0' : '1'
      sys['IS_AUTO_VOUCHER_NPA_OIR'] = ele.IS_AUTO_VOUCHER_NPA_OIR == 0 ? '0' : '1'
      sys['IS_HO_SUB_GLACNO_REQUIRED'] = ele.IS_HO_SUB_GLACNO_REQUIRED == 0 ? '0' : '1'
      sys['IS_REQUIRE_CLEARING_OPTION'] = ele.IS_REQUIRE_CLEARING_OPTION == 0 ? '0' : '1'
      sys['IS_ALLOW_USER_MULTI_LOGIN'] = ele.IS_ALLOW_USER_MULTI_LOGIN == 0 ? '0' : '1'
      sys['IS_BANKERS_COMM_TRAN_REQD'] = ele.IS_BANKERS_COMM_TRAN_REQD == 0 ? '0' : '1'
      sys['IS_IBCIBR_VOUCH_REQD'] = ele.IS_IBCIBR_VOUCH_REQD == 0 ? '0' : '1'
      sys['DEPRECIATION_WITH_HALFFULLRATE'] = ele.DEPRECIATION_WITH_HALFFULLRATE == 0 ? '0' : '1'
      sys['IS_AUTO_UPDATE_SHARES_NO'] = ele.IS_AUTO_UPDATE_SHARES_NO == 0 ? '0' : '1'
      sys['ON_LINE'] = ele.ON_LINE == 0 ? '0' : '1'
      sys['IS_RECEIPT_PRINT_DESIGNMETHOD'] = ele.IS_RECEIPT_PRINT_DESIGNMETHOD == 0 ? '0' : '1'
      sys['IS_ALLOW_RECOVERY'] = ele.IS_ALLOW_RECOVERY
      sys['RECOVERY_DR_ACNO'] = ele.RECOVERY_DR_ACNO
      sys['HO_GLACNO'] = ele.HO_GLACNO
      sys['BG_DR_ACNO'] = ele.BG_DR_ACNO
      sys['BG_CR_ACNO'] = ele.BG_CR_ACNO
      sys['PAY_ORDER_ACNO'] = ele.PAY_ORDER_ACNO
      sys['INWARD_BILLS_PURCHASE_ACNO'] = ele.INWARD_BILLS_PURCHASE_ACNO
      sys['YEAR_CLOSING_TRANSFER_ACNO'] = ele.YEAR_CLOSING_TRANSFER_ACNO
      sys['PL_TRANSFER_ACNO'] = ele.PL_TRANSFER_ACNO
      sys['AUTHORIZED_SHARE_CAPITAL_CODE'] = ele.AUTHORIZED_SHARE_CAPITAL_CODE
      sys['TDS_PAYABLE_GLACNO'] = ele.TDS_PAYABLE_GLACNO
      sys['SURCHARGE_GLACNO'] = ele.SURCHARGE_GLACNO
      sys['CHEQUE_CHARGES_ACNO'] = ele.CHEQUE_CHARGES_ACNO
      sys['CHEQUE_BOUNCE_ACNO'] = ele.CHEQUE_BOUNCE_ACNO
      sys['CHEQUE_BOUNCE_CHARGES'] = ele.CHEQUE_BOUNCE_CHARGES
      sys['MICR_CHARGES_ACNO'] = ele.MICR_CHARGES_ACNO
      sys['GRACE_PERIOD'] = ele.GRACE_PERIOD
      sys['MICR_CHARGES_AMOUNT'] = ele.MICR_CHARGES_AMOUNT
      sys['MICR_CHARGES_INWORD_CLG'] = ele.MICR_CHARGES_INWORD_CLG
      sys['WEEKLY_HOLIDAY'] = ele.WEEKLY_HOLIDAY
      sys['HALF_DAY'] = ele.HALF_DAY
      sys['INT_CALC_METHOD'] = ele.INT_CALC_METHOD
      sys['MORATORIUM_PERIOD'] = ele.MORATORIUM_PERIOD
      sys['SANCTIONED_CASH_LIMIT'] = ele.SANCTIONED_CASH_LIMIT
      sys['IS_PGCOMMISSION_PERCALCULATION'] = ele.IS_PGCOMMISSION_PERCALCULATION
      sys['DIV_CALCU_MONTH'] = ele.DIV_CALCU_MONTH
      sys['HIGH_VALUE_CLEARING_AMT'] = ele.HIGH_VALUE_CLEARING_AMT
      sys['NPA_METHOD'] = ele.NPA_METHOD
      sys['NPA_SUBMETHOD'] = ele.NPA_SUBMETHOD
      sys['DIV_PAYABLE_FOR_LAST_YEARS'] = ele.DIV_PAYABLE_FOR_LAST_YEARS
      sys['MEMBER_FOR_GUR'] = ele.MEMBER_FOR_GUR
      sys['AUTO_LOCK_TIME'] = ele.AUTO_LOCK_TIME
      sys['PASSWORD_EXPIRE_DAYS'] = ele.PASSWORD_EXPIRE_DAYS
      sys['WITHDRW_CLOSING_FOR_GURMEMBERS'] = ele.WITHDRW_CLOSING_FOR_GURMEMBERS
      sys['PREVIOUS_DATE'] = ele.PREVIOUS_DATE == '' || ele.PREVIOUS_DATE == null ? null : moment(ele.PREVIOUS_DATE).format('DD/MM/YYYY');
      sys['CURRENT_DATE'] = ele.CURRENT_DATE == '' || ele.CURRENT_DATE == null ? null : moment(ele.CURRENT_DATE).format('DD/MM/YYYY');
      sys['DAY_BEGIN_EXECUTED'] = ele.DAY_BEGIN_EXECUTED == -1 ? '1' : '0'
      sys['DAY_END_EXECUTED'] = ele.DAY_END_EXECUTED == -1 ? '1' : '0'
      sys['PIGMY_PREVIOUS_DATE'] = ele.PIGMY_PREVIOUS_DATE == '' || ele.PIGMY_PREVIOUS_DATE == null ? null : moment(ele.PIGMY_PREVIOUS_DATE).format('DD/MM/YYYY');
      sys['PIGMY_CURRENT_DATE'] = ele.PIGMY_CURRENT_DATE == '' || ele.PIGMY_CURRENT_DATE == null ? null : moment(ele.PIGMY_CURRENT_DATE).format('DD/MM/YYYY');
      sys['PIGMY_DAY_BEGIN_EXECUTED'] = ele.PIGMY_DAY_BEGIN_EXECUTED == -1 ? '1' : '0'
      sys['PIGMY_DAY_END_EXECUTED'] = ele.PIGMY_DAY_END_EXECUTED == -1 ? '1' : '0'
      sys['BACK_DAY_OPTION'] = ele.BACK_DAY_OPTION
      sys['CASH_IN_HAND_ACNO'] = ele.CASH_IN_HAND_ACNO
      sys['CLG_HOUSE_METHOD'] = ele.CLG_HOUSE_METHOD
      sys['LINES_PER_PASSBOOKPAGE'] = ele.LINES_PER_PASSBOOKPAGE
      sys['PRODUCT_TYPE'] = ele.PRODUCT_TYPE
      sys['NPA_BASE_DAYS'] = ele.NPA_BASE_DAYS
      sys['AUTO_INT_DEBIT_VOCHER'] = ele.AUTO_INT_DEBIT_VOCHER
      sys['PRODUCTWISE_INT_ROUND'] = ele.PRODUCTWISE_INT_ROUND
      sys['IS_ALLOW_OLD_LOAN_EDIT'] = ele.IS_ALLOW_OLD_LOAN_EDIT
      sys['IS_MONTHLY_INTPOST_APPLY_TO_LN'] = ele.IS_MONTHLY_INTPOST_APPLY_TO_LN
      let insertSyspara = await this.SYSPARAService.insert(sys)
      console.log('SYSPARA')
      await connection2.close()
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Something went wrong!',
      }, HttpStatus.FORBIDDEN);
    }
  }

  //SCHEMAST
  async SCHEMAST() {
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('select * from SCHEMAST');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let newObj = new SCHEMAST();
        newObj['S_ACNOTYPE'] = ele.S_ACNOTYPE
        newObj['S_APPL'] = ele.SAPPL
        newObj['S_NAME'] = ele.S_NAME
        newObj['S_SHNAME'] = ele.S_SHNAME
        newObj['S_GLACNO'] = ele.S_GLACNO
        newObj['S_INT_ACNO'] = ele.S_INT_ACNO
        newObj['S_RECBL_PYBL_INT_ACNO'] = ele.S_RECBL_PYBL_INT_ACNO
        newObj['S_PENAL_ACNO'] = ele.S_PENAL_ACNO
        newObj['S_RECBL_PENAL_ACNO'] = ele.S_RECBL_PENAL_ACNO
        newObj['S_RECBL_ODUE_INT_ACNO'] = ele.S_RECBL_ODUE_INT_ACNO
        newObj['S_OUTSTANDING_INT_ACNO'] = ele.S_OUTSTANDING_INT_ACNO
        newObj['IS_DEPO_LOAN'] = ele.IS_DEPO_LOAN
        newObj['S_INT_APPLICABLE'] = ele.S_INT_APPLICABLE == 0 ? '0' : '1'
        newObj['POST_TO_INDIVIDUAL_AC'] = ele.POST_TO_INDIVIDUAL_AC == 0 ? '0' : '1'
        newObj['S_RECEIVABLE_INT_ALLOW'] = ele.S_RECEIVABLE_INT_ALLOW == 0 ? '0' : '1'
        newObj['IS_INT_ON_RECINT'] = ele.IS_INT_ON_RECINT == 0 ? '0' : '1'
        newObj['IS_INT_ON_OTHERAMT'] = ele.IS_INT_ON_OTHERAMT == 0 ? '0' : '1'
        newObj['IS_INTUPTODATE'] = ele.IS_INTUPTODATE == 0 ? '0' : '1'
        newObj['IS_NO_POST_INT_AFT_OD'] = ele.IS_NO_POST_INT_AFT_OD == 0 ? '0' : '1'
        newObj['INTEREST_METHOD'] = ele.INTEREST_METHOD
        newObj['MIN_INT_LIMIT'] = ele.MIN_INT_LIMIT
        newObj['S_PENAL_INT_APPLICABLE'] = ele.S_PENAL_INT_APPLICABLE == 0 ? '0' : '1'
        newObj['IS_POST_PENAL_TO_AC'] = ele.IS_POST_PENAL_TO_AC == 0 ? '0' : '1'
        newObj['POST_PENALINT_IN_INTEREST'] = ele.POST_PENALINT_IN_INTEREST == 0 ? '0' : '1'
        newObj['IS_REC_PENAL_APPL'] = ele.IS_REC_PENAL_APPL == 0 ? '0' : '1'
        newObj['IS_CAL_PENAL_AFTER_EXPIRY'] = ele.IS_CAL_PENAL_AFTER_EXPIRY == 0 ? '0' : '1'
        newObj['S_PENAL_INT_RATE'] = ele.S_PENAL_INT_RATE
        newObj['PENAL_METHOD'] = ele.PENAL_METHOD
        newObj['S_DUE_LIST_ALLOW'] = ele.S_DUE_LIST_ALLOW == 0 ? '0' : '1'
        newObj['GRACE_PERIOD_APPLICABLE'] = ele.GRACE_PERIOD_APPLICABLE == 0 ? '0' : '1'
        newObj['MORATORIUM_APPLICABLE'] = ele.MORATORIUM_APPLICABLE == 0 ? '0' : '1'
        newObj['STAND_INSTRUCTION_ALLOW'] = ele.STAND_INSTRUCTION_ALLOW == 0 ? '0' : '1'
        newObj['BALANCE_ADD_APPLICABLE'] = ele.BALANCE_ADD_APPLICABLE == 0 ? '0' : '1'
        newObj['IS_UNSECURED_LOAN'] = ele.IS_UNSECURED_LOAN == 0 ? '0' : '1'
        newObj['IS_OVERDUE_CHARGES_APPLY'] = ele.IS_OVERDUE_CHARGES_APPLY == 0 ? '0' : '1'
        newObj['MAX_LOAN_LMT'] = ele.MAX_LOAN_LMT
        newObj['ROUNDOFF_FACTOR'] = ele.ROUNDOFF_FACTOR
        newObj['DEFAULT_LOAN_PERIOD'] = ele.DEFAULT_LOAN_PERIOD
        newObj['IS_LOAN_PERIOD_LOCK'] = ele.IS_LOAN_PERIOD_LOCK == 0 ? '0' : '1'
        newObj['MIN_LOAN_PERIOD'] = ele.MIN_LOAN_PERIOD
        newObj['MAX_LOAN_PERIOD'] = ele.MAX_LOAN_PERIOD
        newObj['S_INSTTYPE'] = ele.S_INSTTYPE == 0 ? '0' : '1'
        newObj['INSTALLMENT_METHOD'] = ele.INSTALLMENT_METHOD
        newObj['IS_OVERDUE_ON_INSTALLMENT'] = ele.IS_OVERDUE_ON_INSTALLMENT
        newObj['IS_SHOW_INT_AS_RECINT_IFDUEBAL'] = ele.IS_SHOW_INT_AS_RECINT_IFDUEBAL == 0 ? '0' : '1'
        newObj['MIN_DUE_INSTALLMENTS'] = ele.MIN_DUE_INSTALLMENTS
        newObj['S_PRODUCT_DAY_BASE'] = ele.S_PRODUCT_DAY_BASE
        newObj['S_PRODUCT_DAY_BASE_END'] = ele.S_PRODUCT_DAY_BASE_END
        newObj['CHEQUEBOOK_MIN_BAL'] = ele.CHEQUEBOOK_MIN_BAL
        newObj['DORMANT_FLAG_APPLICABLE'] = ele.DORMANT_FLAG_APPLICABLE == 0 ? '0' : '1'
        newObj['OVERDRAFT_INTEREST_APPLICABLE'] = ele.OVERDRAFT_INTEREST_APPLICABLE
        newObj['OVERDRAFT_INTEREST_RATE'] = ele.OVERDRAFT_INTEREST_RATE
        newObj['GL_ACNO'] = ele.GL_ACNO
        newObj['S_PAYABLE_INT_ALLOW'] = ele.S_PAYABLE_INT_ALLOW == 0 ? '0' : '1'
        newObj['IS_AUTO_CUT_INSTRUCTION'] = ele.IS_AUTO_CUT_INSTRUCTION == 0 ? '0' : '1'
        newObj['IS_ALLOW_SI_MINBAL'] = ele.IS_ALLOW_SI_MINBAL == 0 ? '0' : '1'
        newObj['WITHDRAWAL_APPLICABLE'] = ele.WITHDRAWAL_APPLICABLE == 0 ? '0' : '1'
        newObj['S_INTPAID_ON_CLOSING'] = ele.S_INTPAID_ON_CLOSING == 0 ? '0' : '1'
        newObj['PREMATURE_COMPOUND_INT'] = ele.PREMATURE_COMPOUND_INT == 0 ? '0' : '1'
        newObj['PIGMY_MACHINE_SCHEME'] = ele.PIGMY_MACHINE_SCHEME
        newObj['SVR_CHARGE_GLCODE'] = ele.SVR_CHARGE_GLCODE
        newObj['SVR_CHARGE_RATE'] = ele.SVR_CHARGE_RATE
        newObj['S_CASH_INT_ACNO'] = ele.S_CASH_INT_ACNO
        newObj['INTEREST_RULE'] = ele.INTEREST_RULE == 0 ? '0' : '1'
        newObj['IS_RECURRING_TYPE'] = ele.IS_RECURRING_TYPE == 0 ? '0' : '1'
        newObj['IS_CALLDEPOSIT_TYPE'] = ele.IS_CALLDEPOSIT_TYPE == 0 ? '0' : '1'
        newObj['REINVESTMENT'] = ele.REINVESTMENT == 0 ? '0' : '1'
        newObj['S_INTCALC_METHOD'] = ele.S_INTCALC_METHOD == 0 ? '0' : '1'
        newObj['FIX_QUARTER'] = ele.FIX_QUARTER == 0 ? '0' : '1'
        newObj['QUARTER_PLUS_DAYS'] = ele.QUARTER_PLUS_DAYS == 0 ? '0' : '1'
        newObj['COMPOUND_INT_BASIS'] = ele.COMPOUND_INT_BASIS
        newObj['COMPOUND_INT_DAYS'] = ele.COMPOUND_INT_DAYS
        newObj['IS_DISCOUNTED_INT_RATE'] = ele.IS_DISCOUNTED_INT_RATE == 0 ? '0' : '1'
        newObj['INSTALLMENT_BASIS'] = ele.INSTALLMENT_BASIS
        newObj['IS_ASSUMED_INSTALLMENTS'] = ele.IS_ASSUMED_INSTALLMENTS == 0 ? '0' : '1'
        newObj['INSTALLMENT_COMPULSORY_IN_PAT'] = ele.INSTALLMENT_COMPULSORY_IN_PAT == 0 ? '0' : '1'
        newObj['DEPOSIT_PENAL_INT_CALC_DAY'] = ele.DEPOSIT_PENAL_INT_CALC_DAY
        newObj['S_MATUCALC'] = ele.S_MATUCALC
        newObj['IS_CAL_MATURITY_AMT'] = ele.IS_CAL_MATURITY_AMT == 0 ? '0' : '1'
        newObj['FIXED_MATURITY_AMT'] = ele.FIXED_MATURITY_AMT == 0 ? '0' : '1'
        newObj['TRANSFER_TO_MATURE_DEPOSIT'] = ele.TRANSFER_TO_MATURE_DEPOSIT == 0 ? '0' : '1'
        newObj['S_INTASON'] = ele.S_INTASON == 0 ? '0' : '1'
        newObj['PERIOD_APPLICABLE'] = ele.PERIOD_APPLICABLE == 0 ? '0' : '1'
        newObj['IS_AUTO_PERIOD_CALCULATE'] = ele.IS_AUTO_PERIOD_CALCULATE == 0 ? '0' : '1'
        newObj['UNIT_OF_PERIOD'] = ele.UNIT_OF_PERIOD
        newObj['MIN_DAYS'] = ele.MIN_DAYS
        newObj['MIN_MONTH'] = ele.MIN_MONTH
        newObj['MULTIPLE_OF_AMT'] = ele.MULTIPLE_OF_AMT
        newObj['MULTIPLE_OF_DAYS'] = ele.MULTIPLE_OF_DAYS
        newObj['MULTIPLE_OF_MONTH'] = ele.MULTIPLE_OF_MONTH
        newObj['S_INTPAID'] = ele.S_INTPAID == 0 ? '0' : '1'
        newObj['INT_INSTRUCTION_ALLOW'] = ele.INT_INSTRUCTION_ALLOW == 0 ? '0' : '1'
        newObj['RECEIPT_NO_INPUT'] = ele.RECEIPT_NO_INPUT == 0 ? '0' : '1'
        newObj['LESS_PREMATURE_INT_RATE'] = ele.LESS_PREMATURE_INT_RATE
        newObj['LOCKER_RENT_ACNO'] = ele.LOCKER_RENT_ACNO
        newObj['LOCKER_RECBL_RENT_ACNO'] = ele.LOCKER_RECBL_RENT_ACNO
        newObj['LOCKER_DEPOSIT_APPLICABLE'] = ele.LOCKER_DEPOSIT_APPLICABLE == 0 ? '0' : '1'
        newObj['IS_DAYBASE_INT_CALCULATION'] = ele.IS_DAYBASE_INT_CALCULATION == 0 ? '0' : '1'
        newObj['IS_INSTRUCTION_UPTO_MATURITY'] = ele.IS_INSTRUCTION_UPTO_MATURITY == 0 ? '0' : '1'
        newObj['MEMBER_TYPE'] = ele.MEMBER_TYPE
        newObj['IS_AUTO_NO'] = ele.IS_AUTO_NO == 0 ? '0' : '1'
        newObj['SHARES_FACE_VALUE'] = ele.SHARES_FACE_VALUE
        newObj['MAX_SHARES_LIMIT'] = ele.MAX_SHARES_LIMIT
        newObj['DIVIDEND_PERCENTAGE'] = ele.DIVIDEND_PERCENTAGE
        newObj['IS_ADD_BONUS_IN_DIVIDEND'] = ele.IS_ADD_BONUS_IN_DIVIDEND == 0 ? '0' : '1'
        newObj['INT_ROUND_OFF'] = ele.INT_ROUND_OFF == 0 ? '0' : '1'
        newObj['SANCT_LIMIT_PERCENTAGE'] = ele.SANCT_LIMIT_PERCENTAGE
        newObj['RETIREMENT_YEARS'] = ele.RETIREMENT_YEARS
        newObj['SH_CERTIFICATE_METHOD'] = ele.SH_CERTIFICATE_METHOD
        newObj['MATURED_BUT_NOT_PAID_GLAC'] = ele.MATURED_BUT_NOT_PAID_GLAC
        newObj['IS_RENEWAL_ALLOW'] = ele.IS_RENEWAL_ALLOW == 0 ? '0' : '1'
        newObj['IS_INT_ON_DEPO_AMT'] = ele.IS_INT_ON_DEPO_AMT == 0 ? '0' : '1'
        newObj['S_INTCALTP'] = ele.S_INTCALTP
        newObj['IS_PRODUCTUPTODATE'] = ele.IS_PRODUCTUPTODATE == 0 ? '0' : '1'
        newObj['IS_START_WITH_MONTHS'] = ele.IS_START_WITH_MONTHS == 0 ? '0' : '1'
        newObj['IS_PRODUCT_BAL_BASE'] = ele.IS_PRODUCT_BAL_BASE
        newObj['IS_DAYSBASE_INSTRUCTION'] = ele.IS_DAYSBASE_INSTRUCTION == 0 ? '0' : '1'
        newObj['PREMATURE_ON_DEPOSIT_INST'] = ele.PREMATURE_ON_DEPOSIT_INST == 0 ? '0' : '1'
        newObj['ALLOW_EXTRA_INSTALLMENTS'] = ele.ALLOW_EXTRA_INSTALLMENTS == 0 ? '0' : '1'
        newObj['MATURE_GRACE_MONTHS'] = ele.MATURE_GRACE_MONTHS
        newObj['MATURE_GRACE_DAYS'] = ele.MATURE_GRACE_DAYS
        newObj['IS_AUTO_CUTTING'] = ele.IS_AUTO_CUTTING == 0 ? '0' : '1'
        newObj['MAX_DEP_LMT'] = ele.MAX_DEP_LMT
        newObj['IS_TDS_APPLICABLE'] = ele.IS_TDS_APPLICABLE == 0 ? '0' : '1'
        newObj['S_INTADD_PRINCIPLE'] = ele.S_INTADD_PRINCIPLE == 0 ? '0' : '1'
        newObj['IS_STD_INSTR_UPTO_MATURITY'] = ele.IS_STD_INSTR_UPTO_MATURITY == 0 ? '0' : '1'
        newObj['IS_ADD_PAYINT_IN_INSTRUCTION'] = ele.IS_ADD_PAYINT_IN_INSTRUCTION == 0 ? '0' : '1'
        newObj['RECEIPT_TYPE'] = ele.RECEIPT_TYPE
        newObj['PREMATURE_INTRATE_ASPER'] = ele.PREMATURE_INTRATE_ASPER
        newObj['AFTER_MATURE_INT_RATE'] = ele.AFTER_MATURE_INT_RATE
        newObj['TD_RECEIPT_METHOD'] = ele.TD_RECEIPT_METHOD
        newObj['MIN_BAL_FOR_INT'] = ele.MIN_BAL_FOR_INT
        newObj['ODPENALTY_ON_EXPIRED_LEDGERBAL'] = ele.ODPENALTY_ON_EXPIRED_LEDGERBAL == 0 ? '0' : '1'
        newObj['IS_CAL_EXTRAPENAL_FOR_CC'] = ele.IS_CAL_EXTRAPENAL_FOR_CC == 0 ? '0' : '1'
        newObj['IS_GOLD_LOAN'] = ele.IS_GOLDLOAN
        newObj['S_SINGLE_VOUCHER'] = ele.S_SINGLE_VOUCHER == 0 ? '0' : '1'
        newObj['S_MULTY_VOUCHER'] = ele.S_MULTY_VOUCHER == 0 ? '0' : '1'
        newObj['S_CASH_PAID_MIN_AMT'] = ele.S_CASH_PAID_MIN_AMT
        newObj['S_CASH_PAID_LOCK'] = ele.S_CASH_PAID_LOCK == 0 ? '0' : '1'
        newObj['S_LOCAL_CLEARING'] = ele.S_LOCAL_CLEARING == 0 ? '0' : '1'
        newObj['S_CHEQUE_BOOK'] = ele.S_CHEQUE_BOOK == 0 ? '0' : '1'
        newObj['S_DEMAND_DRAFT'] = ele.S_DEMAND_DRAFT == 0 ? '0' : '1'
        newObj['IS_PO_APPL'] = ele.IS_PO_APPL == 0 ? '0' : '1'
        newObj['S_TEMP_OVERDRFT'] = ele.S_TEMP_OVERDRFT == 0 ? '0' : '1'
        newObj['S_PERIODCL_OVERDRFT'] = ele.S_PERIODCL_OVERDRFT == 0 ? '0' : '1'
        newObj['S_SPECIAL_INSTRUCTION'] = ele.S_SPECIAL_INSTRUCTION == 0 ? '0' : '1'
        newObj['S_SUB_PRINT'] = ele.S_SUB_PRINT == 0 ? '0' : '1'
        newObj['S_FREEZE_APPLICABLE'] = ele.S_FREEZE_APPLICABLE == 0 ? '0' : '1'
        newObj['PROD_INTUPTODATE'] = ele.PROD_INTUPTODATE == 0 ? '0' : '1'
        newObj['S_INT_CR_ACNO'] = ele.S_INT_CR_ACNO
        newObj['IS_ZERO_BAL_REQUIRED'] = ele.IS_ZERO_BAL_REQUIRED == 0 ? '0' : '1'
        newObj['INT_BASE_DAY'] = ele.INT_BASE_DAY
        newObj['INT_BASE_METHOD'] = ele.INT_BASE_METHOD
        newObj['SHOW_OVERDUEINT_IF_RECINTBAL'] = ele.SHOW_OVERDUEINT_IF_RECINTBAL
        newObj['IS_RECOVERY_APPLICABLE'] = ele.IS_RECOVERY_APPLICABLE == 0 ? '0' : '1'
        newObj['IS_ASK_RECOVERY'] = ele.IS_ASK_RECOVERY == 0 ? '0' : '1'
        // newObj['RECOVERY_ACTYPE_FILED'] = ele.RECOVERY_ACTYPE_FILED
        // newObj['RECOVERY_ACNO_FIELD'] = ele.RECOVERY_ACNO_FIELD
        // newObj['REVOVERY_INST_FIELD'] = ele.REVOVERY_INST_FIELD
        // newObj['RECOVERY_INT_INST_FILED'] = ele.RECOVERY_INT_INST_FILED
        // newObj['RECOVERY_BALNACE_FILED'] = ele.RECOVERY_BALNACE_FILED
        // newObj['RECOVERY_RECEIVABLEINT_FILED'] = ele.RECOVERY_RECEIVABLEINT_FILED
        // newObj['RECOVERY_TOTINST_FILED'] = ele.RECOVERY_TOTINST_FILED
        // newObj['RECOVERY_PENALINT_FILED'] = ele.RECOVERY_PENALINT_FILED
        // newObj['RECOVERY_RECEPENALINT_FIELD']=ele.RECOVERY_RECEPENALINT_FIELD
        let scheme = await this.SCHEMASTService.save(newObj);
        let update = await connection2.execute(`update schemast set TYPEID=${scheme.id} where S_APPL = ${ele.S_APPL}`);
        await connection2.commit();
      }
      await connection2.close();
      console.log('SCHEMAST Completed')
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Something went wrong!',
      }, HttpStatus.FORBIDDEN);
    }
  }

  //ACMASTER
  async ACMASTER() {
    try {
      let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
      let result = await connection2.execute('SELECT acmaster.*,schemast.typeid as actype FROM ACMASTER LEFT JOIN SCHEMAST ON ACMASTER.AC_TYPE=SCHEMAST.S_APPL');
      let data = await this.jsonConverter(result);
      for (let ele of data) {
        let newObj = new ACMASTER();
        newObj['id'] = ele.AC_NO;
        newObj['AC_NO'] = ele.AC_NO;
        newObj['AC_NAME'] = ele.AC_NAME;
        newObj['AC_BCD'] = ele.AC_BCD;
        newObj['BRANCH_CODE'] = this.BRANCH_CODE;
        newObj['IS_POST_INT_AC'] = 0
        newObj['IS_DIRECT_ENTRY_ALLOW'] = ele.IS_DIRECT_ENTRY_ALLOW == 0 ? false : true;
        newObj['IS_RED_BALANCE_AC'] = ele.IS_RED_BALANCE_AC == 0 ? false : true;
        newObj['AC_IS_CASH_IN_TRANSIT'] = ele.AC_IS_CASH_IN_TRANSIT == 0 ? false : true;
        newObj['IS_TAXABLEFOR_GST'] = ele.IS_TAXABLEFOR_GST == 0 ? false : true;
        newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
        newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
        newObj['AC_TYPE'] = ele.ACTYPE;
        newObj['IS_ACTIVE'] = true;
        await this.ACMASTERService.insert(newObj);
      }
      await connection2.close()
      console.log('ACMASTER Completed')
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: error,
      }, HttpStatus.FORBIDDEN);
    }
  }
  //TERMMASTER
  async TERMMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM TERMMASTER order by SR_NO');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let obj = new TERMMASTER()
      obj['SR_NO'] = ele.SR_NO
      obj['ACNOTYPE'] = ele.ACNOTYPE
      obj['TERM_TYPE'] = ele.TERM_TYPE
      obj['PERIOD_FROM'] = ele.PERIOD_FROM
      obj['PERIOD_TO'] = ele.PERIOD_TO
      let advo = await this.TERMMASTERService.insert(obj)
    }
    await connection2.close()
    console.log('TERMMASTER')
  }

  //SIZEWISEBALANCE 
  async SIZEWISEBALANCE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from SIZEWISEBALANCE order by amount_from');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let obj = new SIZEWISEBALANCE()
      obj['SR_NO'] = ele.SR_NO
      obj['ACNOTYPE'] = ele.ACNOTYPE
      obj['SLAB_TYPE'] = ele.SLAB_TYPE
      obj['AMOUNT_FROM'] = ele.AMOUNT_FROM == -1 ? 1 : ele.AMOUNT_FROM
      obj['AMOUNT_TO'] = ele.AMOUNT_TO
      obj['UNIT_OF_PERIOD'] = ele.UNIT_OF_PERIOD
      obj['FROM_MONTHS'] = ele.FROM_MONTHS
      obj['FROM_DAYS'] = ele.FROM_DAYS
      obj['TO_MONTHS'] = ele.TO_MONTHS
      obj['TO_DAYS'] = ele.TO_DAYS
      obj['DEDUCTION_PERCENT'] = ele.DEDUCTION_PERCENT
      let advo = await this.SIZEWISEBALANCEService.insert(obj)
    }
    await connection2.close()
    console.log('SIZEWISEBALANCE')

  }
  //INFORMATION
  //ADVOCATE MASTER
  async ADVOCATEMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM ADVOCATEMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.ADVOCATEMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let advocate = new ADVOCATEMASTER()
        advocate['CODE'] = ele.CODE
        advocate['NAME'] = ele.NAME
        let advo = await this.ADVOCATEMASTERService.insert(advocate)
      }
    }
    await connection2.close()
    console.log('ADVOCATEMASTER')
  }

  //BALACATA
  async BALACATA() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM BALACATA order by BC_CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.BALACATAService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['BC_NAME'] == ele.BC_NAME)) {
      }
      else {
        let obj = new BALACATA()
        obj['BC_NAME'] = ele.BC_NAME
        obj['BC_MINBAL'] = ele.BC_MINBAL
        let insertObj = await this.BALACATAService.insert(obj)
      }
    }
    await connection2.close()
    console.log('BALACATA')
  }

  //PREFIX
  async PREFIX() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM PREFIX order by SR_NO');
    let data = await this.jsonConverter(result);
    let pgData = await this.PREFIXService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['PREFIX'] == ele.PREFIX)) {
      }
      else {
        let obj = new PREFIX()
        obj['PREFIX'] = ele.PREFIX
        obj['SEX'] = ele.SEX
        let insertObj = await this.PREFIXService.insert(obj)
      }
    }
    await connection2.close()
    console.log('PREFIX')
  }

  //PRIORITYSECTORMASTER
  async PRIORITYSECTORMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM PRIORITYMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.PRIORITYSECTORMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new PRIORITYSECTORMASTER()
        obj['SUB1_CODE'] = ele.SUB1_CODE
        obj['SUB2_CODE'] = ele.SUB2_CODE
        obj['SUB3_CODE'] = ele.SUB3_CODE
        obj['NAME'] = ele.NAME
        let insertObj = await this.PRIORITYSECTORMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('PRIORITYSECTORMASTER')
  }

  //RECOVERYCLEARKMASTER
  async RECOVERYCLEARKMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM RECOVERYCLEARKMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.RECOVERYCLEARKMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new RECOVERYCLEARKMASTER()
        obj['NAME'] = ele.NAME
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.RECOVERYCLEARKMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('RECOVERYCLEARKMASTER')
  }

  //RISKCATEGORYMASTER
  async RISKCATEGORYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM RISKCATEGORYMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.RISKCATEGORYMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new RISKCATEGORYMASTER()
        obj['NAME'] = ele.NAME
        let insertObj = await this.RISKCATEGORYMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('RISKCATEGORYMASTER')
  }

  //SALARYDIVISIONMASTER
  async SALARYDIVISIONMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM SALARYDIVISIONMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.SALARYDIVISIONMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new SALARYDIVISIONMASTER()
        obj['NAME'] = ele.NAME
        obj['SHORT_NAME'] = ele.SHORT_NAME
        obj['AT_POST'] = ele.AT_POST
        obj['TALUKA_NAME'] = ele.TALUKA_NAME
        obj['DISTRICT_NAME'] = ele.DISTRICT_NAME
        obj['PHNO'] = ele.PHNO
        obj['MOBNO'] = ele.MOBNO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.SALARYDIVISIONMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('SALARYDIVISIONMASTER')
  }

  //SUBSALARYMASTER
  async SUBSALARYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM SUBSALARYMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.SUBSALARYMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new SUBSALARYMASTER()
        obj['NAME'] = ele.NAME
        obj['AT_POST'] = ele.AT_POST
        obj['TALUKA_NAME'] = ele.TALUKA_NAME
        obj['DISTRICT_NAME'] = ele.DISTRICT_NAME
        obj['AC_EMAILID'] = ele.AC_EMAILID
        obj['PHNO'] = ele.PHNO
        obj['MOBNO'] = ele.MOBNO
        obj['SAL_CODE'] = ele.SAL_CODE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.SUBSALARYMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('SUBSALARYMASTER')
  }

  //WEAKERMASTER
  async WEAKERMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM WEAKERMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.WEAKERMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new WEAKERMASTER()
        obj['NAME'] = ele.NAME
        let insertObj = await this.WEAKERMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('WEAKERMASTER')
  }

  //TDRECEIPTMASTER
  async TDRECEIPTMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from TDRECEIPTMASTER');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let obj = new TDRECEIPTMASTER()
      obj['RECEIPT_TYPE'] = ele.RECEIPT_TYPE
      obj['LAST_RECEIPT_NO'] = ele.LAST_RECEIPT_NO
      let insertObj = await this.TDRECEIPTMASTERService.insert(obj)
    }
    await connection2.close()
    console.log('TDRECEIPTMASTER')
  }

  //AUTHORITYMASTER
  async AUTHORITYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM AUTHORITYMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.AUTHORITYMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new AUTHORITYMASTER()
        obj['NAME'] = ele.NAME
        let insertObj = await this.AUTHORITYMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('AUTHORITYMASTER')
  }

  //LOCKERRACKMASTER
  async LOCKERRACKMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM LOCKERRACKMASTER order by RACK_NO');
    let data = await this.jsonConverter(result);
    let pgData = await this.LOCKERRACKMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['RACK_DESC'] == ele.RACK_DESC)) {
      }
      else {
        let obj = new LOCKERRACKMASTER()
        obj['RACK_DESC'] = ele.RACK_DESC
        obj['LOCKER_FROMNO'] = ele.LOCKER_FROMNO
        obj['LOCKER_TONO'] = ele.LOCKER_TONO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.LOCKERRACKMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('LOCKERRACKMASTER')
  }

  //LOCKERSIZE
  async LOCKERSIZE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM LOCKERSIZE order by SIZE_SR_NO');
    let data = await this.jsonConverter(result);
    let pgData = await this.LOCKERSIZEService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['SIZE_NAME'] == ele.SIZE_NAME)) {
      }
      else {
        let obj = new LOCKERSIZE()
        obj['SIZE_NAME'] = ele.SIZE_NAME
        obj['RENT'] = ele.RENT
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.LOCKERSIZEService.insert(obj)
      }
    }
    await connection2.close()
    console.log('LOCKERSIZE')
  }

  //LOCKERMASTER
  async LOCKERMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select LOCKERMASTER.*, lockersize.SIZE_SR_NO from lockermaster left join lockersize on lockermaster.SIZE_SR_NO=lockersize.SIZE_SR_NO');
    let data = await this.jsonConverter(result);
    let pgData = await this.LOCKERMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['LOCKER_NO'] == ele.LOCKER_NO)) {
      }
      else {
        let obj = new LOCKERMASTER()
        obj['LOCKER_NO'] = ele.LOCKER_NO
        obj['KEY_NO'] = ele.KEY_NO
        obj['SIZE_SR_NO'] = ele.SIZE_SR_NO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.LOCKERMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('LOCKERMASTER')
  }

  //ITEMCATEGORYMASTER
  async ITEMCATEGORYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM ITEMCATEGORY order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.ITEMCATEGORYMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new ITEMCATEGORYMASTER()
        obj['NAME'] = ele.NAME
        let insertObj = await this.ITEMCATEGORYMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('ITEMCATEGORYMASTER')
  }

  //DOCUMENTMASTER
  async DOCUMENTMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM DOCUMENTMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.DOCUMENTMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new DOCUMENTMASTER()
        obj['NAME'] = ele.NAME
        let insertObj = await this.DOCUMENTMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('DOCUMENTMASTER')
  }

  //COURTMASTER
  async COURTMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM COURTMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.COURTMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new COURTMASTER()
        obj['NAME'] = ele.NAME
        let insertObj = await this.COURTMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('COURTMASTER')
  }

  //CLEARING BRANCHMASTER
  async BRANCHMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM BRANCHMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.BRANCHMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new BRANCHMASTER()
        obj['NAME'] = ele.NAME
        obj['AC_NO'] = ele.AC_NO == 0 ? null : ele.AC_NO
        let insertObj = await this.BRANCHMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('BRANCHMASTER')
  }

  //CATEGORYMASTER
  async CATEGORYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM CATEGORYMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.CATEGORYMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new CATEGORYMASTER()
        obj['NAME'] = ele.NAME
        let insertObj = await this.CATEGORYMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('CATEGORYMASTER')
  }

  //CASTMASTER
  async CASTMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM CASTMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.CASTMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new CASTMASTER()
        obj['NAME'] = ele.NAME
        let insertObj = await this.CASTMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('CASTMASTER')
  }

  //BANKDETAILS
  async BANKDETAILS() {  //can store single record
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM BANKDETAILS order by BANK_CODE');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let obj = new BANKDETAILS()
      obj['NAME'] = ele.NAME
      obj['TAN_NO'] = ele.TAN_NO
      obj['PAN_NO'] = ele.PAN_NO
      obj['FLAT_PRM_NO'] = ele.FLAT_PRM_NO
      obj['FLAT_PRM_NAME'] = ele.FLAT_PRM_NAME
      obj['RD_LANE_NAME'] = ele.RD_LANE_NAME
      obj['AREA_LOCATION'] = ele.AREA_LOCATION
      obj['CITY_CODE'] = ele.CITY_CODE
      obj['PIN_CODE'] = ele.PIN_CODE
      obj['PHONE_OFFICE'] = ele.PHONE_OFFICE
      obj['EMAIL'] = ele.EMAIL
      obj['SHORT_NAME'] = ele.SHORT_NAME
      obj['GST_NO'] = null
      obj['SBI_BANKCODE'] = ele.SBI_BANKCODE
      obj['MOB_NUM'] = null
      obj['STATE'] = null
      let insertObj = await this.BANKDETAILSService.insert(obj)
    }
    await connection2.close()
    console.log('BANKDETAILS')
  }
  //City master
  async CITYMASTER() {
    // let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM CITYMASTER order by CITY_CODE');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      if (this.PostCitymaster.some(pgData => pgData['CITY_NAME'] == ele.CITY_NAME)) {
      }
      else {
        let newObj = new CITYMASTER();
        newObj['CITY_CODE'] = ele.CITY_CODE;
        newObj['CITY_NAME'] = ele.CITY_NAME;
        newObj['TALUKA_CODE'] = ele.TALUKA_CODE;
        newObj['DISTRICT_CODE'] = ele.DISTRICT_CODE;
        newObj['STATE_CODE'] = ele.STATE_CODE;
        newObj['REGION_CODE'] = ele.REGION_CODE;
        newObj['DISTANCE'] = ele.DISTANCE;
        await this.citymasterService.save(newObj);
      }
    }
    await connection2.close()
    console.log('CITYMASTER')
  }

  //BANKMASTER
  async BANKMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM BANKMASTER order by BANK_CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.BANKMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['BANK_NAME'] == ele.BANK_NAME)) {
      }
      else {
        let obj = new BANKMASTER()
        obj['BANK_NAME'] = ele.BANK_NAME
        obj['BANK_SHORTNAME'] = ele.BANK_SHORTNAME
        obj['LEDGER_CODE'] = ele.LEDGER_CODE
        obj['BANKCODE'] = ele.BANKCODE
        obj['DD_APPLICABLE'] = ele.DD_APPLICABLE == 0 ? '0' : '1'
        obj['GL_ACNO'] = ele.GL_ACNO
        obj['HO_SUB_GLACNO'] = ele.HO_SUB_GLACNO
        obj['BANKERS_COMM_APPLICABLE'] = ele.BANKERS_COMM_APPLICABLE == 0 ? '0' : '1'
        obj['RIGHT_TO_PREPARE_DD'] = ele.RIGHT_TO_PREPARE_DD == 0 ? '0' : '1'
        obj['PARTICIPATE_IN_CLEARING'] = ele.PARTICIPATE_IN_CLEARING == 0 ? '0' : '1'
        let insertObj = await this.BANKMASTERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('BANKMASTER')
  }

  //DEPRCATEGORY
  async DEPRCATEGORY() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM deprcategory order by CODE');
    let data = await this.jsonConverter(result);
    // let acmaster = await this.ACMASTERService.find()
    let pgData = await this.DEPRCATEGORYService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let newObj = new DEPRCATEGORY();
        newObj['NAME'] = ele.NAME;
        newObj['AC_NO'] = ele.AC_NO;
        newObj['BRANCH_CODE'] = this.BRANCH_CODE;
        await this.DEPRCATEGORYService.insert(newObj);
      }
    }
    await connection2.close()
    console.log('DEPRCATEGORY')
  }

  //DIRECTORMASTER
  async DIRECTORMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM DIRECTORMASTER order by CODE');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      if (this.PostdirectorMaster.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let obj = new DIRECTORMASTER();
        obj['NAME'] = ele.NAME
        obj['DESIGNATION'] = ele.DESIGNATION
        obj['AC_ADDR1'] = ele.AC_ADDR1
        obj['AC_ADDR2'] = ele.AC_ADDR2
        obj['AC_ADDR3'] = ele.AC_ADDR3
        obj['AC_PIN'] = ele.AC_PIN
        obj['IS_CURRENT_BODY_MEMBER'] = ele.IS_CURRENT_BODY_MEMBER == 0 ? '0' : '1'
        obj['SMS_REQUIRED'] = ele.SMS_REQUIRED
        obj['AC_MOBILENO'] = ele.AC_MOBILENO
        obj['AC_CTCODE'] = ele.AC_CTCODE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        await this.DIRECTORMASTERService.save(obj);
      }
    }
    await connection2.close()
    console.log('DIRECTORMASTER')
  }

  //HEALTHMASTER
  async HEALTHMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM HEALTHMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.HEALTHMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let newObj = new HEALTHMASTER();
        newObj['NAME'] = ele.NAME;
        await this.HEALTHMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('HEALTHMASTER')
  }
  //INDUSTRYMASTER
  async INDUSTRYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM INDUSTRYMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.INDUSTRYMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let newObj = new INDUSTRYMASTER();
        newObj['NAME'] = ele.NAME;
        await this.INDUSTRYMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('INDUSTRYMASTER')
  }

  //INSUARANCEMASTER
  async INSUARANCEMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM INSUARANCEMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.INSUARANCEMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let newObj = new INSUARANCEMASTER();
        newObj['NAME'] = ele.NAME;
        await this.INSUARANCEMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('INSUARANCEMASTER')
  }

  //INTCATEGORYMASTER
  async INTCATEGORYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM INTCATEGORYMASTER order by CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.INTCATEGORYMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {
      }
      else {
        let newObj = new INTCATEGORYMASTER();
        newObj['NAME'] = ele.NAME;
        await this.INTCATEGORYMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('INTCATEGORYMASTER')
  }

  //ITEMMASTER
  async ITEMMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM ITEMMASTER order by ITEM_CODE');
    let data = await this.jsonConverter(result);
    let pgData = await this.ITEMMASTERService.find()
    let itemcategory = await connection2.execute('SELECT NAME FROM ITEMCATEGORY');
    let itemcategorydata = await this.jsonConverter(itemcategory);
    let postItemcategory = await this.ITEMCATEGORYMASTERService.find()
    if (pgData.length == 0) {
      for (let ele of data) {
        let itemType = null
        if (ele.ITEM_TYPE != null) {
          for (let eleme of itemcategorydata) {
            itemType = (postItemcategory.find(postItemcategory => postItemcategory['NAME'] == eleme.NAME))
          }
        }
        let newObj = new ITEMMASTER();
        newObj['ITEM_TYPE'] = itemType == null ? null : itemType.id;
        newObj['ITEM_CODE'] = ele.ITEM_CODE;
        newObj['ITEM_NAME'] = ele.ITEM_NAME;
        newObj['PURCHASE_DATE'] = ele.PURCHASE_DATE == null ? null : moment(ele.PURCHASE_DATE).format('DD/MM/YYYY');
        newObj['DEPR_CATEGORY'] = ele.DEPR_CATEGORY;
        newObj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME;
        newObj['GL_ACNO'] = ele.GL_ACNO;
        newObj['PURCHASE_OP_QUANTITY'] = ele.PURCHASE_QUANTITY;
        newObj['PURCHASE_RATE'] = ele.PURCHASE_RATE;
        newObj['PURCHASE_VALUE'] = ele.PURCHASE_VALUE;
        newObj['OP_BAL_DATE'] = ele.OP_BAL_DATE == null ? null : moment(ele.OP_BAL_DATE).format('DD/MM/YYYY');
        newObj['OP_QUANTITY'] = ele.OP_QUANTITY;
        newObj['OP_BALANCE'] = ele.OP_BALANCE;
        newObj['LAST_DEPR_DATE'] = ele.LAST_DEPR_DATE == null ? null : moment(ele.LAST_DEPR_DATE).format('DD/MM/YYYY');
        newObj['PURCHASE_QUANTITY'] = ele.PURCHASE_QUANTITY;
        newObj['LAST_UNLOCK_DATE'] = ele.LAST_UNLOCK_DATE == null ? null : moment(ele.LAST_UNLOCK_DATE).format('DD/MM/YYYY');
        newObj['BRANCH_CODE'] = this.BRANCH_CODE;
        newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
        await this.ITEMMASTERService.save(newObj);
      }
    }
    else {
      for (let ele of data) {
        if (pgData.some(pgData => pgData['ITEM_NAME'] == ele.ITEM_NAME) && pgData.some(pgData => moment(pgData['PURCHASE_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.PURCHASE_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {

        }
        else {
          let itemType = null
          if (ele.ITEM_TYPE != null) {
            for (let eleme of itemcategorydata) {
              itemType = (postItemcategory.find(postItemcategory => postItemcategory['NAME'] == eleme.NAME))
            }
          }
          let newObj = new ITEMMASTER();
          newObj['ITEM_TYPE'] = itemType.id;
          newObj['ITEM_CODE'] = ele.ITEM_CODE;
          newObj['ITEM_NAME'] = ele.ITEM_NAME;
          newObj['PURCHASE_DATE'] = ele.PURCHASE_DATE == null ? null : moment(ele.PURCHASE_DATE).format('DD/MM/YYYY');
          newObj['DEPR_CATEGORY'] = ele.DEPR_CATEGORY;
          newObj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME;
          newObj['GL_ACNO'] = ele.GL_ACNO;
          newObj['PURCHASE_OP_QUANTITY'] = ele.PURCHASE_QUANTITY;
          newObj['PURCHASE_RATE'] = ele.PURCHASE_RATE;
          newObj['PURCHASE_VALUE'] = ele.PURCHASE_VALUE;
          newObj['OP_BAL_DATE'] = ele.OP_BAL_DATE == null ? null : moment(ele.OP_BAL_DATE).format('DD/MM/YYYY');
          newObj['OP_QUANTITY'] = ele.OP_QUANTITY;
          newObj['OP_BALANCE'] = ele.OP_BALANCE;
          newObj['LAST_DEPR_DATE'] = ele.LAST_DEPR_DATE == null ? null : moment(ele.LAST_DEPR_DATE).format('DD/MM/YYYY');
          newObj['PURCHASE_QUANTITY'] = ele.PURCHASE_QUANTITY;
          newObj['LAST_UNLOCK_DATE'] = ele.LAST_UNLOCK_DATE == null ? null : moment(ele.LAST_UNLOCK_DATE).format('DD/MM/YYYY');
          newObj['BRANCH_CODE'] = this.BRANCH_CODE;
          await this.ITEMMASTERService.save(newObj);
        }
      }
    }
    await connection2.close()
    console.log('ITEMMASTER')
  }

  //LOANSTAGEMASTER
  async LOANSTAGEMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from LOANSTAGEMASTER');
    let data = await this.jsonConverter(result);
    let pgData = await this.LOANSTAGEMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

      }
      else {
        let newObj = new LOANSTAGEMASTER();
        newObj['NAME'] = ele.NAME;
        await this.LOANSTAGEMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('LOANSTAGEMASTER')
  }

  //NARRATIONMASTER
  async NARRATIONMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from NARRATIONMASTER');
    let data = await this.jsonConverter(result);
    let pgData = await this.NARRATIONMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NARRATION'] == ele.NARRATION)) {

      }
      else {
        let newObj = new NARRATIONMASTER();
        newObj['NARRATION'] = ele.NARRATION;
        await this.NARRATIONMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('NARRATIONMASTER')
  }

  //OCCUPATIONMASTER
  async OCCUPATIONMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM OCCUPATIONMASTER order by "CODE"');
    let data = await this.jsonConverter(result);
    let pgData = await this.OCCUPATIONMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

      }
      else {
        let newObj = new OCCUPATIONMASTER();
        newObj['CODE'] = ele.CODE;
        newObj['NAME'] = ele.NAME;
        await this.OCCUPATIONMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('OCCUPATIONMASTER')
  }

  //OPERATIONMASTER
  async OPERATIONMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM OPERATIONMASTER order by CODE ');
    let data = await this.jsonConverter(result);
    let pgData = await this.OPERATIONMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

      }
      else {
        let newObj = new OPERATIONMASTER();
        newObj['CODE'] = ele.CODE;
        newObj['NAME'] = ele.NAME;
        await this.OPERATIONMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('OPERATIONMASTER')
  }

  //OWNBRANCHMASTER
  async OWNBRANCHMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from OWNBRANCHMASTER');
    let data = await this.jsonConverter(result);

    for (let ele of data) {
      if (this.PostBranch.some(pgData => pgData['NAME'] == ele.NAME)) {

      }
      else {
        let branchCode: number
        //get last number of AC 
        let latestList = await this.OWNBRANCHMASTERService.find({
          order: {
            id: 'DESC'
          },
          take: 1
        })
        let latestEntry = latestList[0]
        if (typeof (latestEntry) == typeof (undefined)) {
          branchCode = 101
        }
        else {
          branchCode = Number(latestEntry.CODE + 1)
        }
        let newObj = new OWNBRANCHMASTER();
        newObj['NAME'] = ele.NAME;
        newObj['CODE'] = branchCode;
        newObj['sysparaId'] = this.PostSyspara[0].id;
        newObj['AC_NO'] = ele.AC_NO == 0 ? null : ele.AC_NO;
        await this.OWNBRANCHMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('OWNBRANCHMASTER')
  }

  //PRIORITYMASTER
  async PRIORITYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from PRIORITYMASTER');
    let data = await this.jsonConverter(result);
    let pgData = await this.PRIORITYMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

      }
      else {
        let newObj = new PRIORITYMASTER();
        newObj['CODE'] = ele.CODE;
        newObj['NAME'] = ele.NAME;
        newObj['SUB1_CODE'] = ele.SUB1_CODE;
        newObj['SUB2_CODE'] = ele.SUB2_CODE;
        newObj['SUB3_CODE'] = ele.SUB3_CODE;
        await this.PRIORITYMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('PRIORITYMASTER')
  }

  //PURPOSEMASTER
  async PURPOSEMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM PURPOSEMASTER order by CODE ');
    let data = await this.jsonConverter(result);
    let pgData = await this.PURPOSEMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

      }
      else {
        let newObj = new PURPOSEMASTER();
        newObj['NAME'] = ele.NAME;
        await this.PURPOSEMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('PURPOSEMASTER')
  }

  //REPORTTYPEMASTER
  async REPORTTYPEMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM REPORTTYPEMASTER order by SERIAL_NO');
    let data = await this.jsonConverter(result);
    let pgData = await this.REPORTTYPEMASTERService.find()
    for (let ele of data) {
      if (pgData.some(pgData => pgData['NAME'] == ele.NAME)) {

      }
      else {
        let newObj = new REPORTTYPEMASTER();
        newObj['NAME'] = ele.NAME;
        await this.REPORTTYPEMASTERService.save(newObj);
      }
    }
    await connection2.close()
    console.log('REPORTTYPEMASTER')
  }

  //HOLIDAYSMASTER
  async HOLIDAYSMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from holidaysmaster order by T_DATE');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let newObj = new HOLIDAYSMASTER();
      newObj['T_DATE'] = ele.T_DATE == '' || ele.T_DATE == null ? null : moment(ele.T_DATE).format('DD/MM/YYYY');
      newObj['T_DESC'] = ele.T_DESC;
      newObj['BRANCH_CODE'] = this.BRANCH_CODE;
      await this.HOLIDAYSMASTERService.save(newObj);
    }
    await connection2.close()
    console.log('HOLIDAYSMASTER')
  }

  //TRANINPUTHEAD
  async TRANINPUTHEAD() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from TRANINPUTHEAD');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let newObj = new TRANINPUTHEAD();
      newObj['SERIAL_NO'] = ele.SERIAL_NO;
      newObj['SCHEME_TYPE'] = ele.SCHEME_TYPE;
      newObj['FIELD_AMOUNT'] = ele.FIELD_AMOUNT;
      newObj['FIELD_GL'] = ele.FIELD_GL;
      newObj['FIELD_INTEREST_DATE'] = ele.FIELD_INTEREST_DATE;
      newObj['FIELD_TRAN_TABLE'] = ele.FIELD_TRAN_TABLE;
      newObj['GL_CODE'] = ele.GL_CODE == 0 ? null : ele.GL_CODE;
      newObj['GL_CODE_FROM_SCHEME_FIELD'] = ele.GL_CODE_FROM_SCHEME_FIELD;
      newObj['DESCRIPTION'] = ele.DESCRIPTION;
      newObj['SHORT_NAME'] = ele.SHORT_NAME;
      newObj['CHECK_REQUIRE'] = ele.CHECK_REQUIRE == 0 ? '0' : '1';
      newObj['DRCR_APPLICABLE'] = ele.DRCR_APPLICABLE;
      newObj['INTEREST_DATE_INPUT'] = ele.INTEREST_DATE_INPUT == 0 ? '0' : '1';
      newObj['HEAD_TYPE'] = ele.HEAD_TYPE;
      newObj['IS_NOTING_REQUIRED'] = ele.IS_NOTING_REQUIRED == 0 ? '0' : '1';
      newObj['IS_GLBAL_MAINTAIN'] = ele.IS_GLBAL_MAINTAIN == 0 ? '0' : '1';
      await this.TRANINPUTHEADService.insert(newObj);
    }
    await connection2.close()
    console.log('TRANINPUTHEAD')
  }

  //PGCOMMISSIONMASTER
  async PGCOMMISSIONMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM PGCOMMISSIONMASTER order by effect_date');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let newObj = new PGCOMMISSIONMASTER();
      newObj['SR_NO'] = ele.SR_NO;
      newObj['EFFECT_DATE'] = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY');
      newObj['SLAB_TYPE'] = ele.SLAB_TYPE;
      newObj['AMOUNT_FROM'] = ele.AMOUNT_FROM == -1 ? '1' : ele.AMOUNT_FROM;
      newObj['AMOUNT_TO'] = ele.AMOUNT_TO;
      newObj['PIGMY_COMMISSION_PERCENTAGE'] = ele.PIGMY_COMMISSION_PERCENTAGE;
      newObj['COMM_AGAINST_LN_PERCENT'] = ele.COMM_AGAINST_LN_PERCENT;
      newObj['AC_ACNOTYPE'] = null;
      newObj['AC_TYPE'] = null;
      newObj['AC_NO'] = null;
      newObj['PG_AC_ACNOTYPE'] = null;
      newObj['PG_AC_TYPE'] = null;
      newObj['PIGMY_SVR_CHARGE_RATE'] = ele.PIGMY_SVR_CHARGE_RATE;
      await this.PGCOMMISSIONMASTERService.save(newObj);
    }
    await connection2.close()
    console.log('PGCOMMISSIONMASTER')
  }
  //security details forms
  //STOCKSTATEMENT
  async STOCKSTATEMENT() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT STOCKSTATEMENT.*,schemast.typeid as actype  FROM STOCKSTATEMENT left join schemast on STOCKSTATEMENT.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.actype
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new STOCKSTATEMENT()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_TYPE'] = ele.actype
        obj['AC_NO'] = BANKACNO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['SECU_CODE'] = secuCode?.id
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['STATEMENT_DATE'] = ele.STATEMENT_DATE == '' || ele.STATEMENT_DATE == null ? null : moment(ele.STATEMENT_DATE).format('DD/MM/YYYY');
        obj['RAW_MATERIAL'] = ele.RAW_MATERIAL
        obj['WORK_PROGRESS'] = ele.WORK_PROGRESS
        obj['FINISHED_GOODS'] = ele.FINISHED_GOODS
        obj['RAW_MARGIN'] = ele.RAW_MARGIN
        obj['WORK_MARGIN'] = ele.WORK_MARGIN
        obj['FINISHED_MARGIN'] = ele.FINISHED_MARGIN
        obj['REMARK'] = ele.REMARK
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        let insertObj = await this.STOCKSTATEMENTService.insert(obj)
      }
    }
    await connection2.close()
    console.log('STOCKSTATEMENT')
  }

  //VEHICLE
  async VEHICLE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  VEHICLE.*,schemast.typeid as actype from VEHICLE left join schemast on VEHICLE.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new VEHICLE()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['SECU_CODE'] = secuCode?.id
        obj['MARGIN'] = ele.MARGIN
        obj['REMARK'] = ele.REMARK
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['RTO_REG_DATE'] = ele.RTO_REG_DATE == '' || ele.RTO_REG_DATE == null ? null : moment(ele.RTO_REG_DATE).format('DD/MM/YYYY');
        obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
        obj['VEHICLE_MAKE'] = ele.VEHICLE_MAKE
        obj['MANUFACTURE_YEAR'] = ele.MANUFACTURE_YEAR
        obj['VEHICLE_NO'] = ele.VEHICLE_NO
        obj['CHASSIS_NO'] = ele.CHASSIS_NO
        obj['NEW_VEHICLE'] = ele.NEW_VEHICLE
        obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
        obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
        obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.VEHICLEService.insert(obj)
      }
    }
    await connection2.close()
    console.log('vehicle')
  }

  //PLEDGESTOCK
  async PLEDGESTOCK() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  PLEDGESTOCK.*,schemast.typeid as actype from PLEDGESTOCK left join schemast on PLEDGESTOCK.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new PLEDGESTOCK()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['SECU_CODE'] = secuCode?.id
        obj['STORAGE_DATE'] = ele.STORAGE_DATE == '' || ele.STORAGE_DATE == null ? null : moment(ele.STORAGE_DATE).format('DD/MM/YYYY');
        obj['STORAGE_MEMO_NO'] = ele.STORAGE_MEMO_NO
        obj['MARGIN'] = ele.MARGIN
        obj['REMARK'] = ele.REMARK
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['GOODS_QTY'] = ele.GOODS_QTY
        obj['MANUF_MILL'] = ele.MANUF_MILL
        obj['DISCRIPTION'] = ele.DISCRIPTION
        obj['BALANCE_QTY'] = ele.BALANCE_QTY
        obj['RATE'] = ele.RATE
        obj['VALUE'] = ele.VALUE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.PLEDGESTOCKService.insert(obj)
      }
    }
    await connection2.close()
    console.log('pledestock')
  }

  //PLANTMACHINARY
  async PLANTMACHINARY() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  PLANTMACHINARY.*,schemast.typeid as actype from PLANTMACHINARY left join schemast on PLANTMACHINARY.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new PLANTMACHINARY()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
        obj['SECU_CODE'] = secuCode?.id
        obj['MACHINE_NAME'] = ele.MACHINE_NAME
        obj['MACHINE_TYPE'] = ele.MACHINE_TYPE
        obj['DISTINCTIVE_NO'] = ele.DISTINCTIVE_NO
        obj['SPECIFICATION'] = ele.SPECIFICATION
        obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
        obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
        obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
        obj['MARGIN'] = ele.MARGIN
        obj['REMARK'] = ele.REMARK
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.PLANTMACHINARYService.insert(obj)
      }
    }
    await connection2.close()
    console.log('plantmachinary')
  }

  //OWNDEPOSIT
  async OWNDEPOSIT() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  OWNDEPOSIT.*,schemast.typeid as actype from OWNDEPOSIT left join schemast on OWNDEPOSIT.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new OWNDEPOSIT()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['DEPO_AC_NO'] = ele.DEPO_AC_NO + 100000
        obj['DEPO_AC_TYPE'] = ele.DEPO_ACTYPE
        obj['BRANCH_CODE'] = ele.BRANCH_CODE
        obj['SECU_CODE'] = secuCode?.id
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['AC_EXPIRE_DATE'] = ele.AC_EXPIRE_DATE == '' || ele.AC_EXPIRE_DATE == null ? null : moment(ele.AC_EXPIRE_DATE).format('DD/MM/YYYY');
        obj['MATURITY_DATE'] = ele.MATURITY_DATE == '' || ele.MATURITY_DATE == null ? null : moment(ele.MATURITY_DATE).format('DD/MM/YYYY');
        obj['RECEIPT_NO'] = ele.RECEIPT_NO
        obj['DEPOSIT_AMT'] = ele.DEPOSIT_AMT
        obj['REMARK'] = ele.REMARK
        obj['MARGIN'] = ele.MARGIN
        obj['LEDGER_BAL'] = ele.LEDGER_BAL
        obj['IS_LIEN_MARK_CLEAR'] = ele.IS_LIEN_MARK_CLEAR
        obj['BALANCE_OF_LOAN_ACCOUNT'] = ele.BALANCE_OF_LOAN_ACCOUNT
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.OWNDEPOSITService.insert(obj)
      }
    }
    await connection2.close()
    console.log('owndeposit')
  }

  //OTHERSECURITY
  async OTHERSECURITY() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  OTHERSECURITY.*,schemast.typeid as actype from OTHERSECURITY left join schemast on OTHERSECURITY.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new OTHERSECURITY()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SECU_CODE'] = secuCode?.id
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['MARGIN'] = ele.MARGIN
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['BRANCH_CODE'] = ele.BRANCH_CODE
        obj['SR_NO'] = ele.SR_NO
        obj['SHORT_DETAILS'] = ele.SHORT_DETAILS
        obj['TOTAL_VALUE'] = ele.TOTAL_VALUE
        obj['DETAILS'] = ele.DETAILS
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.OTHERSECURITYService.insert(obj)
      }
    }
    await connection2.close()
    console.log('othersecurity')
  }

  //MARKETSHARE
  async MARKETSHARE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  MARKETSHARE.*,schemast.typeid as actype from MARKETSHARE left join schemast on MARKETSHARE.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new MARKETSHARE()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SECU_CODE'] = secuCode?.id
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['MARGIN'] = ele.MARGIN
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['RELEASE_DATE'] = ele.RELEASE_DATE == '' || ele.RELEASE_DATE == null ? null : moment(ele.RELEASE_DATE).format('DD/MM/YYYY');
        obj['CO_CODE'] = ele.CO_CODE
        obj['CO_NAME'] = ele.CO_NAME
        obj['MARKET_VALUE'] = ele.MARKET_VALUE
        obj['SHARES'] = ele.SHARES
        obj['UPDATED_BY'] = ele.UPDATED_BY
        obj['RELEASE_BY'] = ele.RELEASE_BY
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.MARKETSHAREService.insert(obj)
      }
    }
    await connection2.close()
    console.log('marketshare')
  }

  //LANDBUILDING
  async LANDBUILDING() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  LANDBUILDING.*,schemast.typeid as actype from LANDBUILDING left join schemast on LANDBUILDING.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new LANDBUILDING()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SECU_CODE'] = secuCode?.id
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['CITY_SURVEY_DATE'] = ele.CITY_SURVEY_DATE == '' || ele.CITY_SURVEY_DATE == null ? null : moment(ele.CITY_SURVEY_DATE).format('DD/MM/YYYY');
        obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
        obj['VALUE'] = ele.VALUE
        obj['LOCATION'] = ele.LOCATION
        obj['AREA'] = ele.AREA
        obj['UNIT_AREA'] = ele.UNIT_AREA
        obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
        obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
        obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
        obj['MARGIN'] = ele.MARGIN
        obj['REMARK'] = ele.REMARK
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['CITY_SURVEY_NO'] = ele.CITY_SURVEY_NO
        obj['REG_NO'] = ele.REG_NO
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.LANDBUILDINGService.insert(obj)
      }
    }
    await connection2.close()
    console.log('landbuilding')
  }

  //GOLDSILVER
  async GOLDSILVER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  GOLDSILVER.*,schemast.typeid as actype from GOLDSILVER left join schemast on GOLDSILVER.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new GOLDSILVER()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SECU_CODE'] = secuCode?.id
        obj['TRAN_STATUS'] = ele.TRAN_STATUS == '' || ele.TRAN_STATUS == 'UP' ? '0' : '1';
        obj['ITEM_TYPE'] = ele.ITEM_TYPE
        obj['TOTAL_WEIGHT_GMS'] = ele.TOTAL_WEIGHT_GMS
        obj['CLEAR_WEIGHT_GMS'] = ele.CLEAR_WEIGHT_GMS
        obj['RATE'] = ele.RATE
        obj['GOLD_BOX_NO'] = ele.GOLD_BOX_NO
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['RETURN_DATE'] = ele.RETURN_DATE == '' || ele.RETURN_DATE == null ? null : moment(ele.RETURN_DATE).format('DD/MM/YYYY');
        obj['ARTICLE_NAME'] = ele.ARTICLE_NAME
        obj['BAG_RECEIPT_NO'] = ele.BAG_RECEIPT_NO
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['MARGIN'] = ele.MARGIN
        obj['REMARK'] = ele.REMARK
        obj['TOTAL_VALUE'] = ele.TOTAL_VALUE
        obj['NOMINEE'] = ele.NOMINEE
        obj['NOMINEE_RELATION'] = ele.NOMINEE_RELATION
        obj['USER_CODE'] = ele.USER_CODE
        obj['OFFICER_CODE'] = ele.OFFICER_CODE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.GOLDSILVERService.insert(obj)
      }
    }
    await connection2.close()
    console.log('goldsilver')
  }

  //FURNITURE
  async FURNITURE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  FURNITURE.*,schemast.typeid as actype from FURNITURE left join schemast on FURNITURE.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new FURNITURE()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SECU_CODE'] = secuCode?.id
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['AQUISITION_DATE'] = ele.AQUISITION_DATE == '' || ele.AQUISITION_DATE == null ? null : moment(ele.AQUISITION_DATE).format('DD/MM/YYYY');
        obj['ARTICLE_NAME'] = ele.ARTICLE_NAME
        obj['ARTICLE_MAKE'] = ele.ARTICLE_MAKE
        obj['NEW_ARTICLE'] = ele.NEW_ARTICLE
        obj['NEW_EQUIPEMENT'] = ele.NEW_EQUIPEMENT
        obj['SUPPLIER_NAME'] = ele.SUPPLIER_NAME
        obj['PURCHASE_PRICE'] = ele.PURCHASE_PRICE
        obj['MARGIN'] = ele.MARGIN
        obj['REMARK'] = ele.REMARK
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.FURNITUREService.insert(obj)
      }
    }
    await connection2.close()
    console.log('furniture')
  }

  //FIREPOLICY
  async FIREPOLICY() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  FIREPOLICY.*,schemast.typeid as actype from FIREPOLICY left join schemast on FIREPOLICY.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new FIREPOLICY()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['POLICY_NO'] = ele.POLICY_NO
        obj['POLICY_DUE_DATE'] = ele.POLICY_DUE_DATE == '' || ele.POLICY_DUE_DATE == null ? null : moment(ele.POLICY_DUE_DATE).format('DD/MM/YYYY');
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['POLICY_AMT'] = ele.POLICY_AMT
        obj['POLICY_NATURE'] = ele.POLICY_NATURE
        obj['PREMIUM_DUE_DATE'] = ele.PREMIUM_DUE_DATE == '' || ele.PREMIUM_DUE_DATE == null ? null : moment(ele.PREMIUM_DUE_DATE).format('DD/MM/YYYY');
        obj['PREMIUM'] = ele.PREMIUM
        obj['INSU_CO_CODE'] = ele.INSU_CO_CODE
        obj['ADDRESS'] = ele.ADDRESS
        obj['CITY'] = ele.CITY
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['SECU_CODE'] = secuCode?.id
        let insertObj = await this.FIREPOLICYService.insert(obj)
      }
    }
    await connection2.close()
    console.log('firepolicy')
  }

  async SECINSURANCE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  SECINSURANCE.*,schemast.typeid as actype from SECINSURANCE left join schemast on SECINSURANCE.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new SECINSURANCE()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['BRANCH_CODE'] = ele.BRANCH_CODE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['INSURANCE_DATE'] = ele.INSURANCE_DATE == '' || ele.INSURANCE_DATE == null ? null : moment(ele.INSURANCE_DATE).format('DD/MM/YYYY');
        obj['POLICY_NO'] = ele.POLICY_NO
        obj['INSU_COMPANY_CODE'] = ele.INSU_COMPANY_CODE
        obj['PREMIUM_DUE_DATE'] = ele.INSU_EXP_DATE == '' || ele.INSU_EXP_DATE == null ? null : moment(ele.INSU_EXP_DATE).format('DD/MM/YYYY');
        obj['INSU_AMOUNT'] = ele.INSU_AMOUNT
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        obj['SECU_CODE'] = secuCode?.id
        let insertObj = await this.SECINSURANCEService.insert(obj)
      }
    }
    await connection2.close()
    console.log('secinsurance')
  }

  //GOVTSECULIC
  async GOVTSECULIC() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  GOVTSECULIC.*,schemast.typeid as actype from GOVTSECULIC left join schemast on GOVTSECULIC.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new GOVTSECULIC()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['AC_NO'] = BANKACNO
        obj['AC_TYPE'] = ele.ACTYPE
        obj['SECU_CODE'] = secuCode?.id
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE == '' || ele.SUBMISSION_DATE == null ? null : moment(ele.SUBMISSION_DATE).format('DD/MM/YYYY');
        obj['CERT_POLICY_DATE'] = ele.CERT_POLICY_DATE == '' || ele.CERT_POLICY_DATE == null ? null : moment(ele.CERT_POLICY_DATE).format('DD/MM/YYYY');
        obj['PREMIUM_DUE_DATE'] = ele.PREMIUM_DUE_DATE == '' || ele.PREMIUM_DUE_DATE == null ? null : moment(ele.PREMIUM_DUE_DATE).format('DD/MM/YYYY');
        obj['MATURE_DUE_DATE'] = ele.MATURE_DUE_DATE == '' || ele.MATURE_DUE_DATE == null ? null : moment(ele.MATURE_DUE_DATE).format('DD/MM/YYYY');
        obj['MARGIN'] = ele.MARGIN
        obj['REMARK'] = ele.REMARK
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['CERT_POLICY_NO'] = ele.CERT_POLICY_NO
        obj['ASSURED_NAME'] = ele.ASSURED_NAME
        obj['PAIDUP_AMT'] = ele.PAIDUP_AMT
        obj['SUM_ASSURED'] = ele.SUM_ASSURED
        obj['PREMIUM'] = ele.PREMIUM
        obj['SURRENDER_VALUE'] = ele.SURRENDER_VALUE
        obj['NOMINEE'] = ele.RECOVERY
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.GOVTSECULICService.insert(obj)
      }
    }
    await connection2.close()
    console.log('govtseculic')
  }

  //BOOKDEBTS
  async BOOKDEBTS() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  BOOKDEBTS.*,schemast.typeid as actype from BOOKDEBTS left join schemast on bookdebts.ac_type=schemast.s_appl');
    let data = await this.jsonConverter(result);
    let securiy = await connection2.execute(`select SECU_NAME from securitymaster`)
    let secutityPGData = await this.SECURITYMASTERService.find()
    let securityData = await this.jsonConverter(securiy);
    for (let ele of data) {
      let schemastData = await this.SCHEMASTService.find({
        where: {
          id: ele.ACTYPE
        }
      })
      if (schemastData.length != 0) {
        let secuCode
        if (ele.SECU_CODE != null) {
          for (let eleme of securityData) {
            secuCode = (secutityPGData.find(ele => ele['SECU_NAME'] == eleme.SECU_NAME))
          }
        }
        let acno = Number(ele.AC_NO) + 100000
        let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
        let obj = new BOOKDEBTS()
        obj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
        obj['BRANCH_CODE'] = ele.BRANCH_CODE
        obj['AC_NO'] = BANKACNO
        obj['SECU_CODE'] = secuCode?.id
        obj['SR_NO'] = ele.SR_NO
        obj['SUBMISSION_DATE'] = ele.SUBMISSION_DATE
        obj['STATEMENT_DATE'] = ele.STATEMENT_DATE
        obj['DEBTORS_OP_BAL'] = ele.DEBTORS_OP_BAL
        obj['CREDIT_SALE'] = ele.CREDIT_SALE
        obj['RECOVERY'] = ele.RECOVERY
        obj['OVERAGED_DEBTORS'] = ele.OVERAGED_DEBTORS
        obj['CLOSE_BAL'] = ele.CLOSE_BAL
        obj['CRD_OUTSTAND_BAL'] = ele.CRD_OUTSTAND_BAL
        obj['MARGIN'] = ele.MARGIN
        obj['REMARK'] = ele.REMARK
        obj['SECURITY_TYPE'] = ele.SECURITY_TYPE
        obj['AC_TYPE'] = ele.ACTYPE
        obj['BRANCH_CODE'] = this.BRANCH_CODE
        let insertObj = await this.BOOKDEBTSService.insert(obj)
      }
    }
    await connection2.close()
    console.log('bookdebts')
  }

  async lengthCheck() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from idmaster where rownum <6 `);
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let newObj = {}
      let namearr = ele.AC_NAME.split(' ');
      newObj['L_NAME'] = namearr[0]
      newObj['F_NAME'] = namearr[1]
      newObj['M_NAME'] = namearr[2]
    }
  }
  //IDMASTER
  async IDMASTERCORRECTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        SELECT IDMASTER.*, OCCUPATIONMASTER.CODE AS OCCUPATION, CASTMASTER.CODE AS CASTMASTER ,RISKCATEGORYMASTER.CODE
        AS RISKCATEGORYMASTER FROM IDMASTER LEFT JOIN OCCUPATIONMASTER ON IDMASTER.AC_OCODE=OCCUPATIONMASTER.CODE
        LEFT JOIN CASTMASTER ON IDMASTER.AC_CAST= CASTMASTER.CODE LEFT JOIN RISKCATEGORYMASTER ON IDMASTER.AC_RISKCATG =
        RISKCATEGORYMASTER.CODE WHERE IDMASTER.AC_NO=1156 ORDER BY IDMASTER.AC_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    let data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDIDMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.IDMASTERWITHLIMIT(data);
  }
  //IDMASTER
  async IDMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        SELECT IDMASTER.*, OCCUPATIONMASTER.CODE AS OCCUPATION, CASTMASTER.CODE AS CASTMASTER ,RISKCATEGORYMASTER.CODE AS RISKCATEGORYMASTER FROM IDMASTER LEFT JOIN OCCUPATIONMASTER ON IDMASTER.AC_OCODE=OCCUPATIONMASTER.CODE LEFT JOIN CASTMASTER ON IDMASTER.AC_CAST= CASTMASTER.CODE LEFT JOIN RISKCATEGORYMASTER ON IDMASTER.AC_RISKCATG = RISKCATEGORYMASTER.CODE ORDER BY IDMASTER.AC_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    let data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from IDMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.IDMASTERWITHLIMIT(data);
  }

  async IDMASTERWITHLIMIT(data) {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let occupationData = await this.OCCUPATIONMASTERService.find()
    let castData = await this.CASTMASTERService.find()
    let riskCategoryData = await this.RISKCATEGORYMASTERService.find()
    for (let ele of data) {
      let occpID = null
      if (ele.OCCUPATION != null) {
        let occupation = await connection2.execute(`select NAME from OCCUPATIONMASTER where CODE=${ele.OCCUPATION}`)
        let occData = await this.jsonConverter(occupation);
        for (let eleme of occData) {
          occpID = (occupationData.find(occupationData => occupationData['NAME'] == eleme.NAME))
        }
      }
      let castID = null
      if (ele.CASTMASTER != null) {
        let CASTdATA = await connection2.execute(`select NAME from CASTMASTER where CODE=${ele.CASTMASTER}`)
        let occData = await this.jsonConverter(CASTdATA);
        for (let eleme of occData) {
          castID = (castData.find(castData => castData['NAME'] == eleme.NAME))
        }
      }
      let RISKID = null
      if (ele.RISKCATEGORYMASTER != null) {
        let CASTdATA = await connection2.execute(`select NAME from RISKCATEGORYMASTER where CODE=${ele.RISKCATEGORYMASTER}`)
        let occData = await this.jsonConverter(CASTdATA);
        for (let eleme of occData) {
          RISKID = (riskCategoryData.find(riskCategoryData => riskCategoryData['NAME'] == eleme.NAME))
        }
      }
      let mem_TYPE = null
      if (ele.AC_MEMBTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.AC_MEMBTYPE}`)
        mem_TYPE = await this.jsonConverter(memTYPE);
      }
      let AC_MEMBNO = ele.AC_MEMBNO == 0 ? null : Number(ele.AC_MEMBNO) + 100000
      let newObj = new IDMASTER();
      newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].TYPEID;
      newObj['AC_MEMBNO'] = AC_MEMBNO + '';
      newObj['AC_NO'] = ele.AC_NO;
      newObj['AC_TITLE'] = ele.AC_TITLE;
      let namearr = ele.AC_NAME.split(' ');
      newObj['L_NAME'] = namearr == null ? null : namearr[0]
      newObj['F_NAME'] = namearr == null ? null : namearr[1]
      newObj['M_NAME'] = namearr == null ? null : namearr[2]
      newObj['AC_NAME'] = ele.AC_NAME;
      newObj['AC_ADHARNO'] = ele.AC_ADHARNO;
      newObj['AC_BIRTH_DT'] = ele.AC_BIRTH_DT == null ? null : moment(ele.AC_BIRTH_DT).format('DD/MM/YYYY');
      newObj['AC_PANNO'] = ele.AC_PANNO;
      newObj['AC_MOBILENO'] = ele.AC_MOBILENO;
      newObj['AC_PHONE_RES'] = ele.AC_PHONE_RES;
      newObj['AC_PHONE_OFFICE'] = ele.AC_PHONE_OFFICE;
      newObj['AC_EMAILID'] = ele.AC_EMAIL;
      newObj['TDSDOCUMNET'] = '0';
      newObj['TDS_REQUIRED'] = ele.TDS_REQUIRED == 0 ? '0' : '1';
      newObj['SMS_REQUIRED'] = ele.SMS_REQUIRED == 0 ? '0' : '1';
      newObj['IS_KYC_RECEIVED'] = ele.IS_KYC_RECEIVED == 0 ? '0' : '1';
      newObj['AC_OCODE'] = occpID == null ? null : occpID.id;
      newObj['AC_RISKCATG'] = RISKID == null ? null : RISKID.id;
      newObj['AC_CAST'] = castID == null ? null : castID.id;
      newObj['ORA_AC_NO'] = ele.AC_NO;
      newObj['ORA_BRANCH'] = this.BRANCH_CODE;
      let idmasterData = await this.IDMASTERService.save(newObj);

      //customer address
      let address = new CUSTOMERADDRESS();
      address['AC_HONO'] = ele.AC_HONO == 0 ? null : ele.AC_HONO;
      address['AC_WARD'] = ele.AC_WARD;
      address['AC_ADDR'] = ele.AC_ADDR;
      address['AC_GALLI'] = ele.AC_GALLI;
      address['AC_AREA'] = ele.AC_AREA;
      address['AC_PIN'] = ele.AC_PIN == 0 ? null : ele.AC_PIN;
      address['AC_ADDFLAG'] = true;
      address['idmasterID'] = idmasterData.id;
      address['AC_ADDTYPE'] = 'P';
      address['AC_CTCODE'] = ele.AC_CTCODE;
      await this.CUSTOMERADDRESSService.save(address);
    }
    await connection2.close()
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.IDMASTER()
    } else if (this.flag == 1) {
      console.log('IDMASTER');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.IDMASTER()
    }
  }

  //IDMASTER - CUSTOMERADDRESS
  async CUSTOMERADDRESS() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from CUSTOMERADDRESS');

    let data = await this.jsonConverter(result);
    data.forEach(async ele => {
      let newObj = new CUSTOMERADDRESS();
      newObj['AC_HONO'] = ele.AC_HONO;
      newObj['AC_WARD'] = ele.AC_WARD;
      newObj['AC_ADDR'] = ele.AC_ADDR;
      newObj['AC_GALLI'] = ele.AC_GALLI;
      newObj['AC_AREA'] = ele.AC_AREA;
      //newObj['AC_PIN'] = ele.AC_PIN;
      newObj['AC_ADDFLAG'] = ele.AC_ADDFLAG;
      newObj['idmasterID'] = ele.IDMASTERID;
      newObj['AC_ADDTYPE'] = ele.AC_ADDTYPE;
      newObj['AC_CTCODE'] = ele.AC_CTCODE;

      await this.CUSTOMERADDRESSService.save(newObj);
    })
    console.log('Completed CUSTOMERADDRESS')
  }

  //nomineelink
  async nomineelink(table, acnotype, ac_type, ac_no, id) {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`SELECT nomineelink.AC_NNAME AS AC_NNAME,nomineelink .AC_NRELA as AC_NRELA, nomineelink.AC_NDATE as AC_NDATE, nomineelink.AGE as AGE,addr1 as AC_NADDR, nomineelink.addr2 as AC_NGALLI, nomineelink.addr3 as AC_NAREA,nomineelink.pin as AC_NPIN, nomineelink.ctcode as AC_CTCODE,
    nomineelink .ac_no FROM nomineelink  where nomineelink.ac_acnotype = '${acnotype}' and ac_type = ${ac_type} and ac_no = ${ac_no}  ORDER BY nomineelink.ac_no`)

    let data = await this.jsonConverter(result);
    for (let element of data) {
      //city find
      let city = await connection2.execute(`select CITY_NAME from CITYMASTER where CITY_CODE=${element.AC_CTCODE}`)
      let CITYMASTER = await this.jsonConverter(city);
      let CITYID
      for (let eleme of CITYMASTER) {
        CITYID = (this.PostCitymaster.find(cityData => cityData['CITY_NAME'] == eleme.CITY_NAME))
      }
      let nominee = new NOMINEELINK();
      nominee['AC_NNAME'] = element.AC_NNAME;
      nominee['AC_NRELA'] = element.AC_NRELA;
      nominee['AC_NDATE'] = element.AC_NDATE == '' || element.AC_NDATE == null ? null : moment(element.AC_NDATE).format('DD/MM/YYYY');
      nominee['AGE'] = element.AGE;
      nominee['AC_NADDR'] = element.AC_NADDR;
      nominee['AC_NGALLI'] = element.AC_NGALLI;
      nominee['AC_NAREA'] = element.AC_NAREA;
      nominee['AC_NCTCODE'] = CITYID?.id;
      nominee['AC_NPIN'] = element.AC_NPIN;
      if (table == 'SHMASTER') {
        nominee['sharesID'] = id;
      }
      else if (table == 'DPMASTER') {
        nominee['DPMasterID'] = id;
      }
      else if (table == 'PGMASTER') {
        nominee['pigmyAID'] = id;
      }
      let nom = await this.nomineeService.insert(nominee);
    }
    await connection2.close()
  }

  //atteroney
  async atteroney(table, acnotype, ac_type, ac_no, id) {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`SELECT ATTERONEYLINK.ATTERONEY_NAME AS ATTERONEY_NAME,
    ATTERONEYLINK .DATE_APPOINTED as DATE_APPOINTED,
    ATTERONEYLINK.DATE_EXPIRY as DATE_EXPIRY,
       ATTERONEYLINK .ac_no FROM ATTERONEYLINK 
     where ATTERONEYLINK.ac_acnotype = '${acnotype}' and ac_type = ${ac_type} and ac_no = ${ac_no}
     ORDER BY ATTERONEYLINK .ac_no`)

    let data = await this.jsonConverter(result);
    for (let element of data) {
      let attorney = new ATTERONEYLINK();
      attorney['ATTERONEY_NAME'] = element.ATTERONEY_NAME;
      attorney['DATE_APPOINTED'] = element.DATE_APPOINTED == '' || element.DATE_APPOINTED == null ? null : moment(element.DATE_APPOINTED).format('DD/MM/YYYY');
      attorney['DATE_EXPIRY'] = element.DATE_EXPIRY == '' || element.DATE_EXPIRY == null ? null : moment(element.DATE_EXPIRY).format('DD/MM/YYYY');
      if (table == 'DPMASTER') {
        attorney['DPMasterID'] = id;
      }
      else if (table == 'PGMASTER') {
        attorney['PGMasterID'] = id;
      }
      let nom = await this.atteroneyService.insert(attorney);
    }
    await connection2.close()
  }

  //joint
  async jointAc(table, acnotype, ac_type, ac_no, id) {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`SELECT * FROM JointAcLink  where JointAcLink.ac_acnotype = '${acnotype}' and ac_type =  ${ac_type} and ac_no =  ${ac_no}  ORDER BY JointAcLink.ac_no`)
    let data = await this.jsonConverter(result);
    for (let element of data) {
      let joint = new TEMPJOINTACLINK();
      // joint['JOINT_AC_CUSTID'] = element.JOINT_AC_CUSTID;
      joint['JOINT_ACNAME'] = element.JOINT_ACNAME;
      if (element.OPERATOR == 0) {
        joint['OPERATOR'] = 'No';
      }
      else {
        joint['OPERATOR'] = 'Yes';
      }
      if (table == 'DPMASTER') {
        joint['DPMasterID'] = id;
      }
      else if (table == 'PGMASTER') {
        joint['PGMasterID'] = id;
      }
      await this.TEMPJOINTACLINKService.insert(joint);
    }
    await connection2.close()
  }

  //TDSFORMSUBMIT
  async TDSFORMSUBMIT() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from TDSFORMSUBMIT');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let custid = (this.Postidmaster.find(acmasterData => acmasterData['ORA_AC_NO'] == ele.AC_CUSTID && acmasterData['ORA_BRANCH'] == this.BRANCH_CODE))
      let newObj = new TDSFORMSUBMIT();
      newObj['FIN_YEAR'] = ele.FIN_YEAR
      newObj['SUBMIT_DATE'] = ele.SUBMIT_DATE == '' || ele.SUBMIT_DATE == null ? '' : moment(ele.SUBMIT_DATE).format('DD/MM/YYYY');
      newObj['FORM_TYPE'] = ele.FORM_TYPE
      newObj['TDS_RATE'] = ele.TDS_RATE
      newObj['TDS_LIMIT'] = ele.TDS_LIMIT
      newObj['IS_EXEMPT_TDS'] = ele.IS_EXEMPT_TDS
      newObj['idmasterID'] = custid.id
      await this.TDSFORMSUBMITService.save(newObj);
    }
    await connection2.close()
    console.log('TDSFORMSUBMIT')
  }


  async lnmasterread() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from LNMASTER where rownum<=1 ');
    let data = await this.jsonConverter(result);
    data.forEach(async ele => {
      let guaranterdetails = await connection2.execute(`SELECT GUARANTERDETAILS .*, schemast.typeid as ACTYPE,lnmaster.B_ACNO  from  GUARANTERDETAILS left join schemast on GUARANTERDETAILS.ac_type=schemast.s_appl LEFT JOIN LNMASTER ON GUARANTERDETAILS.AC_NO=LNMASTER.AC_NO where GUARANTERDETAILS.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND GUARANTERDETAILS.AC_TYPE = ${ele.AC_TYPE} AND GUARANTERDETAILS.AC_NO = ${ele.AC_NO}`)
      let guaranterdetail = await this.jsonConverter(guaranterdetails);
      console.log(guaranterdetail, 'guaran')
      let securitydetails = await connection2.execute(`SELECT SECURITYDETAILS .*, schemast.typeid as ACTYPE,lnmaster.B_ACNO  from  SECURITYDETAILS left join schemast on securitydetails.ac_type=schemast.s_appl LEFT JOIN LNMASTER ON SECURITYDETAILS.AC_NO=LNMASTER.AC_NO where SECURITYDETAILS.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND SECURITYDETAILS.AC_TYPE = ${ele.AC_TYPE} AND SECURITYDETAILS.AC_NO = ${ele.AC_NO}`)
      let security = await this.jsonConverter(securitydetails);
      console.log(security, 'security')
      let coborrowerDeatils = await connection2.execute(`SELECT COBORROWER .*, schemast.typeid as ACTYPE,lnmaster.B_ACNO  from  COBORROWER left join schemast on COBORROWER.ac_type=schemast.s_appl LEFT JOIN LNMASTER ON COBORROWER.AC_NO=LNMASTER.AC_NO where COBORROWER.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND COBORROWER.AC_TYPE = ${ele.AC_TYPE} AND COBORROWER.AC_NO = ${ele.AC_NO}`)
      // SELECT COBORROWER.*, schemast.typeid as ACTYPE, lnmaster.B_ACNO  from  COBORROWER left join schemast on COBORROWER.ac_type = schemast.s_appl left JOIN LNMASTER ON COBORROWER.AC_NO = LNMASTER.AC_NO where COBORROWER.AC_ACNOTYPE = 'CC' AND COBORROWER.AC_TYPE = 80200 AND COBORROWER.AC_NO = 490002
      let coborrower = await this.jsonConverter(coborrowerDeatils);
      console.log(coborrower, 'coborrower')
    })
  }

  //instruction
  //SPECIALINSTRUCTION
  async SPECIALINSTRUCTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select  SPECIALINSTRUCTION.*,schemast.typeid as actype from SPECIALINSTRUCTION left join schemast on SPECIALINSTRUCTION.tran_actype=schemast.s_appl order by instruction_date');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      if (ele.ACTYPE == null) {
        continue;
      }
      let lockerSchemeData = null
      lockerSchemeData = await this.SCHEMASTService.find({
        where: {
          id: (ele.ACTYPE)
        }
      })
      let BANKACNO = null
      if (lockerSchemeData.length != 0) {
        let TDACNO = Number(ele.TRAN_ACNO) + 100000
        BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
      }
      let obj = new SPECIALINSTRUCTION()
      obj['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
      obj['TRAN_ACNO'] = BANKACNO
      obj['TRAN_ACTYPE'] = ele.ACTYPE
      obj['DRCR_APPLY'] = ele.DRCR_APPLY
      obj['DETAILS'] = ele.DETAILS
      obj['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
      obj['TO_DATE'] = ele.TO_DATE == '' || ele.TO_DATE == null ? null : moment(ele.TO_DATE).format('DD/MM/YYYY');
      obj['IS_RESTRICT'] = ele.IS_RESTRICT == 0 ? '0' : '1'
      obj['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
      await this.SPECIALINSTRUCTIONService.save(obj);
    }
    await connection2.close()
    console.log('SPECIALINSTRUCTION')
  }
  //TODTRAN
  async TODTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select TODTRAN.*, SCHEMAST.TYPEID AS ACTYPE from TODTRAN LEFT JOIN SCHEMAST ON TODTRAN.AC_TYPE= SCHEMAST.S_APPL');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      if (ele.ACTYPE == null) {
        continue;
      }
      let lockerSchemeData = null
      lockerSchemeData = await this.SCHEMASTService.find({
        where: {
          id: (ele.ACTYPE)
        }
      })
      let BANKACNO = null
      if (lockerSchemeData.length != 0) {
        let TDACNO = Number(ele.AC_NO) + 100000
        BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
      }
      let obj = new TODTRAN()
      obj['AC_TYPE'] = ele.ACTYPE
      obj['AC_NO'] = BANKACNO
      obj['RELEASE_DATE'] = ele.RELEASE_DATE == '' || ele.RELEASE_DATE == null ? null : moment(ele.RELEASE_DATE).format('DD/MM/YYYY');
      if (ele.TOD_TYPE == 'TOD') {
        obj['AC_ODAMT'] = ele.TOD_AMOUNT
      }
      else {
        obj['AC_SODAMT'] = ele.TOD_AMOUNT
        obj['AC_ODDAYS'] = ele.TOD_DAYS
        obj['AC_ODDATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY');
      }
      await this.TODTRANService.save(obj);
    }
    await connection2.close()
    console.log('TODTRAN')
  }
  //STANDINSTRUCTION
  async STANDINSTRUCTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from STANDINSTRUCTION order by instruction_date');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let CR_ACTYPE = null
      if (ele.CR_ACTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.CR_ACTYPE}`)
        CR_ACTYPE = await this.jsonConverter(memTYPE);
      }
      let DR_ACTYPE = null
      if (ele.DR_ACTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.DR_ACTYPE}`)
        DR_ACTYPE = await this.jsonConverter(memTYPE);
      }
      let interestIns = new STANDINSTRUCTION()
      interestIns['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
      interestIns['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
      interestIns['TO_DATE'] = ele.TO_DATE == '' || ele.TO_DATE == null ? null : moment(ele.NEXT_EXE_DATE).format('DD/MM/YYYY');
      // Month Begin =MB , Month End = ME, Specific Day = day		
      if (ele.EXECUTION_DAY == 'MB')
        interestIns['EXECUTION_DAY'] = 'Month Begin'
      else if (ele.EXECUTION_DAY == 'ME')
        interestIns['EXECUTION_DAY'] = 'Month End'
      else if (ele.EXECUTION_DAY == 'day')
        interestIns['EXECUTION_DAY'] = 'Specific Day of Month'
      interestIns['DR_ACTYPE'] = DR_ACTYPE == null ? null : DR_ACTYPE[0].TYPEID
      interestIns['DR_AC_NO'] = DR_ACTYPE == null ? null : Number(ele.DR_AC_NO) + 100000
      interestIns['DAYS'] = ele.SI_PERIOD
      interestIns['DR_PARTICULARS'] = ele.DR_PARTICULARS
      interestIns['CR_ACTYPE'] = CR_ACTYPE == null ? null : CR_ACTYPE[0].TYPEID
      interestIns['CR_AC_NO'] = CR_ACTYPE == null ? null : Number(ele.CR_AC_NO) + 100000
      interestIns['CR_PARTICULARS'] = ele.CR_PARTICULARS
      interestIns['SI_FREQUENCY'] = ele.SI_FREQUENCY
      // M = MONTHLY / Q=QUARTERLY / H=HALF YEARLY / Y=YEARLY
      if (ele.SI_FREQUENCY == 'M')
        interestIns['SI_FREQUENCY'] = 'Monthly'
      else if (ele.SI_FREQUENCY == 'Q')
        interestIns['SI_FREQUENCY'] = 'Quarterly'
      else if (ele.SI_FREQUENCY == 'H')
        interestIns['SI_FREQUENCY'] = 'Half Yearly'
      else
        interestIns['SI_FREQUENCY'] = 'Fixed Quarterly'
      interestIns['LAST_EXEC_DATE'] = ele.LAST_EXEC_DATE == '' || ele.LAST_EXEC_DATE == null ? null : moment(ele.LAST_EXEC_DATE).format('DD/MM/YYYY');
      interestIns['MIN_BAL'] = ele.MIN_BAL
      interestIns['PAYINT_AMOUNT'] = ele.PAYINT_AMOUNT
      interestIns['IS_AUTO_CUT_LNPGCOM'] = ele.IS_AUTO_CUT_LNPGCOM
      interestIns['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
      interestIns['BRANCH_CODE'] = this.BRANCH_CODE
      await this.STANDINSTRUCTIONService.save(interestIns);
    }
    await connection2.close()
    console.log('STANDINSTRUCTION')
  }
  //INTINSTRUCTION
  async INTINSTRUCTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from INTINSTRUCTION order by instruction_date');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let CR_ACTYPE = null
      if (ele.CR_ACTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.CR_ACTYPE}`)
        CR_ACTYPE = await this.jsonConverter(memTYPE);
      }
      let DR_ACTYPE = null
      if (ele.DR_ACTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.DR_ACTYPE}`)
        DR_ACTYPE = await this.jsonConverter(memTYPE);
      }
      let interestIns = new INTINSTRUCTION()
      interestIns['INSTRUCTION_DATE'] = ele.INSTRUCTION_DATE == '' || ele.INSTRUCTION_DATE == null ? null : moment(ele.INSTRUCTION_DATE).format('DD/MM/YYYY');
      interestIns['FROM_DATE'] = ele.FROM_DATE == '' || ele.FROM_DATE == null ? null : moment(ele.FROM_DATE).format('DD/MM/YYYY');
      interestIns['NEXT_EXE_DATE'] = ele.NEXT_EXE_DATE == '' || ele.NEXT_EXE_DATE == null ? null : moment(ele.NEXT_EXE_DATE).format('DD/MM/YYYY');
      if (ele.EXECUTION_DAY == 'MB')
        interestIns['EXECUTION_DAY'] = 'Month Begin'
      else if (ele.EXECUTION_DAY == 'ME')
        interestIns['EXECUTION_DAY'] = 'Month End'
      else if (ele.EXECUTION_DAY == 'day')
        interestIns['EXECUTION_DAY'] = 'Specific Day of Month'
      interestIns['DR_ACTYPE'] = DR_ACTYPE == null ? null : DR_ACTYPE[0].TYPEID
      interestIns['CR_ACTYPE'] = CR_ACTYPE == null ? null : CR_ACTYPE[0].TYPEID
      interestIns['DR_AC_NO'] = DR_ACTYPE == null ? null : Number(ele.DR_AC_NO) + 100000
      interestIns['CR_AC_NO'] = CR_ACTYPE == null ? null : Number(ele.CR_AC_NO) + 100000
      // interestIns['DAYS'] = ele.SI_PERIOD
      interestIns['DR_PARTICULARS'] = ele.DR_PARTICULARS
      interestIns['CR_PARTICULARS'] = ele.CR_PARTICULARS
      if (ele.SI_FREQUENCY == 'M')
        interestIns['SI_FREQUENCY'] = 'Monthly'
      else if (ele.SI_FREQUENCY == 'Q')
        interestIns['SI_FREQUENCY'] = 'Quarterly'
      else if (ele.SI_FREQUENCY == 'H')
        interestIns['SI_FREQUENCY'] = 'Half Yearly'
      else
        interestIns['SI_FREQUENCY'] = 'Fixed Quarterly'
      interestIns['LAST_EXEC_DATE'] = ele.LAST_EXEC_DATE == '' || ele.LAST_EXEC_DATE == null ? null : moment(ele.LAST_EXEC_DATE).format('DD/MM/YYYY');
      interestIns['TRAN_TYPE'] = ele.TRAN_TYPE == 'TR' ? 'Transfer' : 'Cash'
      interestIns['ADV_NARRATION'] = ele.ADV_NARRATION
      // interestIns['DEFAULT_INTEREST_APPLICABLE'] = ele.DEFAULT_INTEREST_APPLICABLE
      interestIns['REVOKE_DATE'] = ele.REVOKE_DATE == '' || ele.REVOKE_DATE == null ? null : moment(ele.REVOKE_DATE).format('DD/MM/YYYY');
      interestIns['BRANCH_CODE'] = this.BRANCH_CODE
      await this.INTINSTRUCTIONService.save(interestIns);
    }
    await connection2.close()
    console.log('intinstruction')
  }

  //defination
  //interest rate for term deposit
  //INTRATETD grid table:TERMINTRATE
  async intrateTD() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select distinct intratetd.ACNOTYPE,intratetd.INT_CATEGORY,intratetd.EFFECT_DATE,intratetd.actype, schemast.typeid as ac_type  from INTRATETD left join schemast on intratetd.actype=schemast.s_appl order by intratetd.effect_date asc`)
    let data = await this.jsonConverter(result);

    let pgData = await this.intRateTDRepository.find()
    for (let ele of data) {
      if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
      }
      else {
        let intCategory = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.INT_CATEGORY}`)
        let int_category = await this.jsonConverter(intCategory);
        let int_cat
        int_category.forEach(eleme => {
          int_cat = (this.PostInterestCategoryData.find(intCategoryPg => intCategoryPg['NAME'] == eleme.NAME))
        })
        let InterestRate = new INTRATETD()
        let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
        InterestRate['ACNOTYPE'] = ele.AC_TYPE == null ? null : Number(ele.AC_TYPE)
        InterestRate['INT_CATEGORY'] = int_cat.id
        InterestRate['TYPE'] = ele.ACNOTYPE
        InterestRate['EFFECT_DATE'] = effectDate;
        let tdRate = await this.intRateTDRepository.save(InterestRate);
        //GRID QUERY
        let result1
        if (ele.ACTYPE == null) {
          result1 = await connection2.execute(`select * FROM INTRATETD WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')`)
        }
        else {
          result1 = await connection2.execute(`select * FROM INTRATETD WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')  AND ACTYPE=${ele.ACTYPE}`)
        }
        // select * FROM INTRATETD WHERE ACNOTYPE='TD' AND INT_CATEGORY=2 AND EFFECT_DATE=TO_DATE('01/10/2016','DD/MM/YYYY') AND ACTYPE=20100)
        let grid = await this.jsonConverter(result1);
        for (let element of grid) {
          let newRate = new TERMINTRATE();
          newRate['FROM_DAYS'] = element.FROM_DAYS;
          newRate['FROM_MONTHS'] = element.FROM_MONTHS;
          newRate['TO_DAYS'] = element.TO_DAYS;
          newRate['TO_MONTHS'] = element.TO_MONTHS;
          newRate['INT_RATE'] = element.INT_RATE;
          newRate['PENAL_INT_RATE'] = element.PENAL_INT_RATE;
          newRate['idRateID'] = tdRate.id;
          await this.intRateTDGridRepository.insert(newRate);
        }
      }
    }
    await connection2.close()
    console.log('INTRATETD')
  }
  //interest rate for deposit interest rate 
  //INTRATETDMULTI grid table:INTMULTI
  async INTRATETDMULTI() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select distinct INTRATETDMULTI.INT_CATEGORY,INTRATETDMULTI.actype, schemast.typeid as ac_type from INTRATETDMULTI left join schemast on INTRATETDMULTI.actype=schemast.s_appl`)
    let data = await this.jsonConverter(result);
    let pgData = await this.intRateTDRepository.find()
    for (let ele of data) {
      if (pgData.some(date => date['ACNOTYPE'] == ele.ACNOTYPE && date['INT_CATEGORY'] == ele.INT_CATEGORY)) {
      }
      else {
        let InterestRate = new INTRATETDMULTI()
        InterestRate['ACNOTYPE'] = Number(ele.AC_TYPE)
        InterestRate['INT_CATEGORY'] = Number(ele.INT_CATEGORY)
        let tdRate = await this.INTRATETDMULTIService.save(InterestRate);
        //GRID QUERY
        let result1 = await connection2.execute(`select * FROM INTRATETDMULTI WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND ACTYPE=${ele.ACTYPE}`)
        // select * FROM INTRATETDMULTI WHERE ACNOTYPE='TD' AND INT_CATEGORY=1 AND ACTYPE=20100
        let grid = await this.jsonConverter(result1);
        for (let element of grid) {
          let newRate = new INTMULTI();
          let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
          newRate['EFFECT_DATE'] = effectDate;
          newRate['INT_RATE'] = element.INT_RATE;
          newRate['idRateID'] = tdRate.id;
          await this.INTMULTIService.insert(newRate);
        }
      }
    }
    await connection2.close()
    console.log('INTRATETDMULTI')
  }

  //DEPRICIATION RATE MASTER
  //DEPRCATEGORY
  async DEPRRATE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from deprrate');
    let data = await this.jsonConverter(result);
    let pgData = await this.DEPRRATEService.find()
    for (let ele of data) {
      if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
      }
      else {
        let newObj = new DEPRRATE();
        let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
        newObj['EFFECT_DATE'] = effectDate;
        newObj['CATEGORY'] = ele.CATEGORY;
        newObj['DEPR_RATE'] = ele.DEPR_RATE;
        await this.DEPRRATEService.insert(newObj);
      }
    }
    await connection2.close()
    console.log('DEPRRATE')
  }

  //interest rate for loan anc cc
  // intrateloan-lnccloan
  async INTRATELOAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select distinct intrateLOAN.ACNOTYPE,intrateLOAN.INT_CATEGORY,intrateLOAN.EFFECT_DATE,intrateLOAN.actype, schemast.typeid as ac_type  from INTRATELOAN left join schemast on intrateLOAN.actype=schemast.s_appl order by intrateLOAN.effect_date asc`)
    let data = await this.jsonConverter(result);
    let pgData = await this.INTRATELOANService.find()
    for (let ele of data) {
      if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
      }
      else {
        let intCategory = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.INT_CATEGORY}`)
        let int_category = await this.jsonConverter(intCategory);
        let int_cat
        int_category.forEach(eleme => {
          int_cat = (this.PostInterestCategoryData.find(intCategoryPg => intCategoryPg['NAME'] == eleme.NAME))
        })
        let InterestRate = new INTRATELOAN()
        let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
        InterestRate['ACNOTYPE'] = ele.AC_TYPE == null ? null : Number(ele.AC_TYPE)
        InterestRate['INT_CATEGORY'] = int_cat.id
        // InterestRate['INT_CATEGORY'] = Number(ele.INT_CATEGORY)
        InterestRate['EFFECT_DATE'] = effectDate;
        let rate = await this.INTRATELOANService.save(InterestRate);
        //GRID QUERY
        let result1
        if (ele.ACTYPE != null) {
          result1 = await connection2.execute(`select * FROM INTRATELOAN WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YY')  AND ACTYPE=${ele.ACTYPE}`)
        }
        else {
          result1 = await connection2.execute(`select * FROM INTRATELOAN WHERE ACNOTYPE='${ele.ACNOTYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YY')`)
        }
        // select * FROM INTRATETD WHERE ACNOTYPE='TD' AND INT_CATEGORY=2 AND EFFECT_DATE=TO_DATE('01/10/2016','DD/MM/YYYY' AND ACTYPE=20100)
        let grid = await this.jsonConverter(result1);
        for (let element of grid) {
          let newRate = new LNCCLOAN();
          newRate['FROM_AMOUNT'] = element.FROM_AMOUNT;
          newRate['TO_AMOUNT'] = element.TO_AMOUNT;
          newRate['INT_RATE'] = element.INT_RATE;
          newRate['PENAL_INT_RATE'] = element.PENAL_INT_RATE;
          newRate['idRateID'] = rate.id;
          await this.LNCCLOANService.insert(newRate);
        }
      }
    }
    await connection2.close()
    console.log('INTRATELOAN')
  }

  //pat scheme intrest rate
  //INTRATEPATSCHEMES-intrate
  async INTRATEPATSCHEMES() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select distinct INTRATEPATSCHEMES.INT_CATEGORY,INTRATEPATSCHEMES.EFFECT_DATE,INTRATEPATSCHEMES.ac_type, schemast.typeid as ACTYPE  from INTRATEPATSCHEMES left join schemast on INTRATEPATSCHEMES.ac_type=schemast.s_appl order by INTRATEPATSCHEMES.effect_date asc`)
    let data = await this.jsonConverter(result);
    let pgData = await this.INTRATEPATSCHEMESService.find()
    for (let ele of data) {
      if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
      }
      else {
        let intCategory = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.INT_CATEGORY}`)
        let int_category = await this.jsonConverter(intCategory);
        let int_cat
        int_category.forEach(eleme => {
          int_cat = (this.PostInterestCategoryData.find(intCategoryPg => intCategoryPg['NAME'] == eleme.NAME))
        })
        let InterestRate = new INTRATEPATSCHEMES()
        let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
        InterestRate['AC_TYPE'] = ele.ACTYPE == null ? null : Number(ele.ACTYPE)
        InterestRate['INT_CATEGORY'] = int_cat.id
        InterestRate['EFFECT_DATE'] = effectDate;
        let tdRate = await this.INTRATEPATSCHEMESService.save(InterestRate);
        //GRID QUERY
        let result1
        if (ele.AC_TYPE == null) {
          result1 = await connection2.execute(`select * FROM INTRATEPATSCHEMES WHERE INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')`)
        }
        else {
          result1 = await connection2.execute(`select * FROM INTRATEPATSCHEMES WHERE ac_type='${ele.AC_TYPE}' AND INT_CATEGORY=${ele.INT_CATEGORY} AND EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')`)
        }
        // select * FROM INTRATEPATSCHEMES WHERE ac_type='20200' AND INT_CATEGORY=1 AND EFFECT_DATE=TO_DATE('01/01/2001','DD/MM/YYYY')
        let grid = await this.jsonConverter(result1);
        for (let element of grid) {
          let newRate = new INTRATE();
          newRate['MONTHS'] = element.MONTHS;
          newRate['DAYS'] = element.DAYS;
          newRate['INT_RATE'] = element.INT_RATE;
          newRate['idRateID'] = tdRate.id;
          await this.INTRATEService.insert(newRate);
        }
      }
    }
    await connection2.close()
    console.log('INTRATEPATSCHEMES')
  }

  //prmature pigmy less int rate
  //PREMATULESSRATE:prematuless
  async PREMATULESSRATE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select distinct PREMATULESSRATE.EFFECT_DATE,PREMATULESSRATE.actype, schemast.typeid as ac_type  from PREMATULESSRATE left join schemast on PREMATULESSRATE.actype=schemast.s_appl order by PREMATULESSRATE.effect_date asc`)
    let data = await this.jsonConverter(result);
    let pgData = await this.PREMATULESSRATEService.find()
    for (let ele of data) {
      if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
      }
      else {
        let InterestRate = new PREMATULESSRATE()
        let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
        InterestRate['AC_ACNOTYPE'] = ele.AC_TYPE == null ? null : Number(ele.AC_TYPE)
        InterestRate['EFFECT_DATE'] = effectDate;
        let tdRate = await this.PREMATULESSRATEService.save(InterestRate);
        //GRID QUERY
        let result1
        if (ele.ACTYPE == null) {
          result1 = await connection2.execute(`select * FROM PREMATULESSRATE WHERE EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY') `)
        }
        else {
          result1 = await connection2.execute(`select * FROM PREMATULESSRATE WHERE EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')  AND ACTYPE=${ele.ACTYPE}`)
        }

        // select * FROM PREMATULESSRATE WHERE EFFECT_DATE=TO_DATE('01/01/2000','DD/MM/YYYY')  AND ACTYPE=30500
        let grid = await this.jsonConverter(result1);
        for (let element of grid) {
          let newRate = new PREMATULESS();
          newRate['FROM_MONTHS'] = element.FROM_MONTHS;
          newRate['TO_MONTHS'] = element.TO_MONTHS;
          newRate['LESS_INT_RATE'] = element.LESS_INT_RATE;
          newRate['idRateID'] = tdRate.id;
          await this.PREMATULESSService.insert(newRate);
        }
      }
    }
    await connection2.close()
    console.log('PREMATULESSRATE')
  }

  //saving and pigmy interest rate
  //INTRATESBPG
  async INTRATESBPG() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select INTRATESBPG.*, schemast.typeid as AC_TYPE from INTRATESBPG left join schemast on schemast.s_appl= intratesbpg.actype');
    let data = await this.jsonConverter(result);
    let pgData = await this.INTRATESBPGService.find()
    for (let ele of data) {
      if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
      }
      else {
        let intCategory = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.INT_CATEGORY}`)
        let int_category = await this.jsonConverter(intCategory);
        let int_cat
        int_category.forEach(eleme => {
          int_cat = (this.PostInterestCategoryData.find(intCategoryPg => intCategoryPg['NAME'] == eleme.NAME))
        })
        let newObj = new INTRATESBPG();
        let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
        newObj['EFFECT_DATE'] = effectDate;
        newObj['INT_RATE'] = ele.INT_RATE;
        newObj['ACNOTYPE'] = ele.AC_TYPE == null ? null : Number(ele.AC_TYPE);
        newObj['TYPE'] = ele.ACNOTYPE;
        newObj['INT_CATEGORY'] = int_cat.id;
        await this.INTRATESBPGService.insert(newObj);
      }
    }
    await connection2.close()
    console.log('INTRATESBPG')
  }
  //security code
  //securitymaster
  async SECURITYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM SECURITYMASTER order by SECU_CODE');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let security = new SECURITYMASTER()
      security['SECU_NAME'] = ele.SECU_NAME
      security['MARGIN'] = ele.MARGIN
      security['FIRE_POLICY'] = ele.FIRE_POLICY == 0 ? '0' : '1'
      security['MARKET_SHARE'] = ele.MARKET_SHARE == 0 ? '0' : '1'
      security['BOOK_DEBTS'] = ele.BOOK_DEBTS == 0 ? '0' : '1'
      security['PLEDGE_STOCK'] = ele.PLEDGE_STOCK == 0 ? '0' : '1'
      security['STOCK_STATEMENT'] = ele.STOCK_STATEMENT == 0 ? '0' : '1'
      security['GOVT_SECU_LIC'] = ele.GOVT_SECU_LIC == 0 ? '0' : '1'
      security['PLANT_MACHINARY'] = ele.PLANT_MACHINARY == 0 ? '0' : '1'
      security['FURNITURE_FIXTURE'] = ele.FURNITURE_FIXTURE == 0 ? '0' : '1'
      security['VEHICLE'] = ele.VEHICLE == 0 ? '0' : '1'
      security['OWN_DEPOSIT'] = ele.OWN_DEPOSIT == 0 ? '0' : '1'
      security['LAND_BUILDING'] = ele.LAND_BUILDING == 0 ? '0' : '1'
      security['GOLD_SILVER'] = ele.GOLD_SILVER == 0 ? '0' : '1'
      security['OTHER_SECURITY'] = ele.OTHER_SECURITY == 0 ? '0' : '1'
      security['CUST_INSURANCE'] = ele.CUST_INSURANCE == 0 ? '0' : '1'
      let sec = await this.SECURITYMASTERService.insert(security)
    }
    await connection2.close()
    console.log('SECURITYMASTER')
  }

  //tds interest rate
  //tdsrate
  async TDSRATE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from tdsrate');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let tds = new TDSRATE()
      tds['FIN_YEAR'] = ele.FIN_YEAR
      tds['INTEREST_AMOUNT'] = ele.INTEREST_AMOUNT
      tds['TDS_RATE'] = ele.TDS_RATE
      tds['SURCHARGE_RATE'] = ele.SURCHARGE_RATE
      tds['EFFECT_DATE'] = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
      let tdsrates = await this.TDSRATEService.insert(tds)
    }
    await connection2.close()
    console.log('TDSRATE')
  }
  //NPAMASTER
  async NPAMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`SELECT distinct effect_date,npa_base_days from NPAMASTER order by effect_date asc`)
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let InterestRate = new NPAMASTER()
      let effectDate = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY')
      InterestRate['NPA_BASE_DAYS'] = ele.NPA_BASE_DAYS
      InterestRate['EFFECT_DATE'] = effectDate;
      let npa = await this.NPAMASTERService.save(InterestRate);
      //GRID QUERY
      let result1 = await connection2.execute(`SELECT * from NPAMASTER where EFFECT_DATE=TO_DATE('${effectDate}','DD/MM/YYYY')  AND NPA_BASE_DAYS=${ele.NPA_BASE_DAYS}`)
      // SELECT * from NPAMASTER where EFFECT_DATE=TO_DATE('01/04/2007','DD/MM/YYYY') AND npa_base_days=365
      let grid = await this.jsonConverter(result1);
      for (let element of grid) {
        let obj = new NPACLASSIFICATION();
        obj['SERIAL_NO'] = element.SERIAL_NO
        obj['NPA_CLASS'] = element.NPA_CLASS
        obj['SUB_CLASS_NO'] = element.SUB_CLASS_NO
        obj['NPA_DESCRIPTION'] = element.NPA_DESCRIPTION
        obj['FROM_MONTHS'] = element.FROM_MONTHS
        obj['FROM_DAYS'] = element.FROM_DAYS
        obj['TO_MONTHS'] = element.TO_MONTHS
        obj['TO_DAYS'] = element.TO_DAYS
        obj['SECURED_PERCENT'] = element.SECURED_PERCENT
        obj['UNSECURED_PERCENT'] = element.UNSECURED_PERCENT
        obj['NPAClassID'] = npa.id
        await this.NPACLASSIFICATIONService.insert(obj);
      }
    }
    await connection2.close()
    console.log('NPAMASTER')
  }
  //COMMISSIONSLAB
  async COMMISSIONSLAB() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from COMMISSIONSLAB');
    let data = await this.jsonConverter(result);
    for (let ele of data) {
      let slab = new COMMISSIONSLAB()
      slab['INSTRUMENT_TYPE'] = ele.INSTRUMENT_TYPE
      slab['EFFECTIVE_DATE'] = ele.EFFECTIVE_DATE == '' || ele.EFFECTIVE_DATE == null ? null : moment(ele.EFFECTIVE_DATE).format('DD/MM/YYYY')
      slab['FROM_AMOUNT'] = ele.FROM_AMOUNT
      slab['TO_AMOUNT'] = ele.TO_AMOUNT
      slab['RATE'] = ele.RATE
      slab['RATE_PER_UNIT'] = ele.RATE_PER_UNIT
      slab['RATE_PER_UNIT'] = ele.RATE_PER_UNIT
      slab['MIN_COMMISSION'] = ele.MIN_COMMISSION
      slab['MAX_COMMISSION'] = ele.MAX_COMMISSION
      let slabrates = await this.COMMISSIONSLABService.insert(slab)
    }
    await connection2.close()
    console.log('COMMISSIONSLAB')
  }
  //pgMASTER with offset and limit
  async PGMASTERCORRECTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
          SELECT NOTFOUNDPGMASTER.*,  CATEGORYMASTER.CODE AS ACCATG ,  SCHEMAST.TYPEID AS AC_TYPE1 ,
                NOTFOUNDPGMASTER.AC_TYPE AS DPTYPE, OWNBRANCHMASTER.CODE AS ACINTROBRANCH ,   OPERATIONMASTER.CODE AS ACOPRCODE,
                INTCATEGORYMASTER.CODE AS ACINTCATA FROM NOTFOUNDPGMASTER  
                    left JOIN INTCATEGORYMASTER ON NOTFOUNDPGMASTER.AC_INTCATA=INTCATEGORYMASTER.CODE
                    left JOIN OPERATIONMASTER ON NOTFOUNDPGMASTER.AC_OPR_CODE=OPERATIONMASTER.CODE
                    left JOIN CATEGORYMASTER ON NOTFOUNDPGMASTER.AC_CATG=CATEGORYMASTER.CODE
                    left JOIN OWNBRANCHMASTER ON NOTFOUNDPGMASTER.AC_INTROBRANCH= OWNBRANCHMASTER.CODE 
                    left JOIN SCHEMAST ON NOTFOUNDPGMASTER.AC_TYPE= SCHEMAST.S_APPL ORDER BY NOTFOUNDPGMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDPGMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.PGMASTERSCRIPTWITHLIMIT(data);
  }
  //pgMASTER with offset and limit
  async PGmasterScript() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT PGMASTER.*,  CATEGORYMASTER.CODE AS ACCATG ,  SCHEMAST.TYPEID AS AC_TYPE1 ,
                PGMASTER.AC_TYPE AS DPTYPE, OWNBRANCHMASTER.CODE AS ACINTROBRANCH ,   OPERATIONMASTER.CODE AS ACOPRCODE, INTCATEGORYMASTER.CODE AS ACINTCATA FROM PGMASTER  
                    left JOIN INTCATEGORYMASTER ON PGMASTER.AC_INTCATA=INTCATEGORYMASTER.CODE
                    left JOIN OPERATIONMASTER ON PGMASTER.AC_OPR_CODE=OPERATIONMASTER.CODE
                    left JOIN CATEGORYMASTER ON PGMASTER.AC_CATG=CATEGORYMASTER.CODE
                    left JOIN OWNBRANCHMASTER ON PGMASTER.AC_INTROBRANCH= OWNBRANCHMASTER.CODE 
                    left JOIN SCHEMAST ON PGMASTER.AC_TYPE= SCHEMAST.S_APPL ORDER BY PGMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from PGMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.PGMASTERSCRIPTWITHLIMIT(data);
  }
  async PGMASTERSCRIPTWITHLIMIT(data) {
    let operations = await this.OPERATIONMASTERService.find()
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let dpmasterData = await this.PGMASTERService.find()
    for (let ele of data) {
      if (ele.AC_TYPE1 == null) {
        continue;
      }
      let idmasterID
      if (ele.AC_CUSTID != null) {
        let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
        let IDMASTER = await this.jsonConverter(CUSTID);
        for (let eleme of IDMASTER) {
          idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
        }
      }
      if (idmasterID == undefined) {
        continue;
      }
      let AGENT_TYPE = null
      if (ele.AGENT_ACTYPE != null) {
        let AGENTTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.AGENT_ACTYPE}`)
        AGENT_TYPE = await this.jsonConverter(AGENTTYPE);
      }
      let mem_TYPE = null
      if (ele.AC_MEMBTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.AC_MEMBTYPE}`)
        mem_TYPE = await this.jsonConverter(memTYPE);
      }

      //directormaster find
      let directorID = null
      if (ele.AC_DIRECT != null) {
        let direct = await connection2.execute(`select NAME from DIRECTORMASTER where CODE=${ele.AC_DIRECT}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          directorID = (this.PostdirectorMaster.find(directorMaster => directorMaster['NAME'] == deleme.NAME))
        }
      }
      let categoryID = null
      if (ele.ACCATG != null) {
        //categorymaster find
        let categoryM = await connection2.execute(`select NAME from CATEGORYMASTER where CODE=${ele.ACCATG}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          categoryID = (this.PostCategoryMaster.find(category => category['NAME'] == celeme.NAME))
        }
      }
      let OperationID = null
      if (ele.AC_OPR_CODE != null) {
        //operationmaster find
        let categoryM = await connection2.execute(`select NAME from operationmaster where CODE=${ele.AC_OPR_CODE}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          OperationID = (operations.find(operations => operations['NAME'] == celeme.NAME))
        }
      }
      let intcategoryID = null
      if (ele.AC_INTCATA != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.AC_INTCATA}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          intcategoryID = (this.PostInterestCategoryData.find(intCategory => intCategory['NAME'] == celeme.NAME))
        }
      }
      let AC_INTROBRANCHID = null
      if (ele.AC_INTROBRANCH != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select NAME from OWNBRANCHMASTER where CODE=${ele.AC_INTROBRANCH}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          AC_INTROBRANCHID = (this.PostBranch.find(ownbranchmaster => ownbranchmaster['NAME'] == celeme.NAME))
        }
      }
      let schemastData = this.PostSchemast.filter(ele1 => ele1['id'] == ele.AC_TYPE1);
      let agentData = null
      let AGENTBANKACNO = null
      let AGENTAC_NO = Number(ele.AGENT_ACNO) + 100000
      if (ele.AGENT_ACTYPE != null) {
        agentData = this.PostSchemast.filter(ele2 => ele2['id'] == AGENT_TYPE[0].TYPEID);
        if (agentData.length != 0)
          AGENTBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentData[0].S_APPL + AGENTAC_NO
      }
      let acno = Number(ele.AC_NO) + 100000
      let AC_MEMBNO = Number(ele.AC_MEMBNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let dpmasterDuplicate = dpmasterData.filter(ele3 => ele3['BANKACNO'] == BANKACNO);
      if (dpmasterDuplicate.length != 0) {
        continue;
      }
      let newObj = new PGMASTER();
      newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
      newObj['AC_NO'] = acno;
      newObj['AC_CUSTID'] = idmasterID.id;
      newObj['AC_NAME'] = ele.AC_NAME;
      newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? null : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
      newObj['AC_SHORT_NAME'] = ele.AC_SHORT_NAME;
      newObj['REF_ACNO'] = ele.REF_ACNO;
      newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].TYPEID;
      newObj['AC_MEMBNO'] = AC_MEMBNO + '';
      newObj['AC_AGE'] = ele.AC_AGE;
      newObj['AC_RENEW_DATE'] = ele.AC_RENEW_DATE == '' || ele.AC_RENEW_DATE == null ? null : moment(ele.AC_RENEW_DATE).format('DD/MM/YYYY');
      newObj['AC_LINTEDT'] = ele.AC_LINTEDT == '' || ele.AC_LINTEDT == null ? null : moment(ele.AC_LINTEDT).format('DD/MM/YYYY');
      newObj['AC_EXPDT'] = ele.AC_EXPDT == '' || ele.AC_EXPDT == null ? null : moment(ele.AC_EXPDT).format('DD/MM/YYYY');
      newObj['AC_MONTHS'] = ele.AC_MONTHS;
      newObj['AC_SCHMAMT'] = ele.AC_SCHMAMT;
      newObj['AGENT_BRANCH'] = this.BRANCH_CODE
      newObj['AGENT_ACTYPE'] = AGENT_TYPE[0].TYPEID;
      newObj['AGENT_ACNO'] = AGENTBANKACNO
      newObj['AC_MBDATE'] = ele.AC_MBDATE == '' || ele.AC_MBDATE == null ? null : moment(ele.AC_MBDATE).format('DD/MM/YYYY');
      newObj['AC_GRDNAME'] = ele.AC_GRDNAME;
      newObj['AC_GRDRELE'] = ele.AC_GRDRELE;
      newObj['AC_INTRNAME'] = ele.AC_INTRNAME;
      newObj['PG_COMM_TYPE'] = ele.PG_COMM_TYPE == 0 ? '0' : '1';
      newObj['AC_MINOR'] = ele.AC_MINOR == 0 ? '0' : '1';
      newObj['SIGNATURE_AUTHORITY'] = ele.SIGNATURE_AUTHORITY == undefined ? null : ele.SIGNATURE_AUTHORITY;
      newObj['AC_REF_RECEIPTNO'] = ele.AC_REF_RECEIPTNO == undefined ? null : ele.AC_REF_RECEIPTNO;
      newObj['AC_ASON_DATE'] = ele.AC_ASON_DATE == '' || ele.AC_ASON_DATE == null ? null : moment(ele.AC_ASON_DATE).format('DD/MM/YYYY');
      newObj['AC_MATUAMT'] = ele.AC_MATUAMT;
      newObj['IS_DISCOUNTED_INT_RATE'] = false;
      newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS;
      newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT;
      newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == '' || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
      newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON;
      newObj['AC_ODAMT'] = ele.AC_ODAMT;
      newObj['AC_SODAMT'] = ele.AC_SODAMT;
      newObj['AC_ODDAYS'] = ele.AC_ODDAYS;
      newObj['AC_ODDATE'] = ele.AC_ODDATE == '' || ele.AC_ODDATE == null ? null : moment(ele.AC_ODDATE).format('DD/MM/YYYY');
      newObj['BANKACNO'] = BANKACNO;
      newObj['status'] = 1;
      newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
      newObj['AC_OP_CD'] = ele.AC_OP_CD;
      newObj['AC_OP_BAL'] = ele.AC_OP_BAL;
      newObj['AC_CLOSED'] = ele.AC_CLOSED == 0 ? '0' : '1';
      newObj['IS_POST_INT_AC'] = ele.IS_POST_INT_AC == 0 ? 0 : 1;
      newObj['AC_PRODUCT'] = ele.AC_PRODUCT;
      //   newObj['AC_INTRATE'] = ele.AC_INTRATE;
      newObj['AC_ACTDATE'] = ele.AC_ACTDATE == '' || ele.AC_ACTDATE == null ? null : moment(ele.AC_ACTDATE).format('DD/MM/YYYY');
      newObj['AC_BALDATE'] = ele.AC_BALDATE == '' || ele.AC_BALDATE == null ? null : moment(ele.AC_BALDATE).format('DD/MM/YYYY');
      newObj['AC_LINTDT'] = ele.AC_LINTDT == '' || ele.AC_LINTDT == null ? null : moment(ele.AC_LINTDT).format('DD/MM/YYYY');
      //relation
      newObj['AC_INTROBRANCH'] = AC_INTROBRANCHID == null ? null : AC_INTROBRANCHID.id;
      newObj['idmasterID'] = idmasterID.id;
      newObj['AC_INTCATA'] = intcategoryID == null ? null : intcategoryID.id;
      newObj['AC_CATG'] = categoryID == null ? null : categoryID.id;
      newObj['AC_OPR_CODE'] = OperationID == null ? null : OperationID.id;
      newObj['BRANCH_CODE'] = this.BRANCH_CODE
      newObj['AC_TYPE'] = ele.AC_TYPE1
      newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
      newObj['AC_PAYBLEINT_OP'] = ele.AC_PAYBLEINT_OP
      let master = await this.PGMASTERService.save(newObj);
      let nomniee = await this.nomineelink('PGMASTER', ele.AC_ACNOTYPE, ele.DPTYPE, ele.AC_NO, master.id)
      let attorney = await this.atteroney('PGMASTER', ele.AC_ACNOTYPE, ele.DPTYPE, ele.AC_NO, master.id)
      let joint = await this.jointAc('PGMASTER', ele.AC_ACNOTYPE, ele.DPTYPE, ele.AC_NO, master.id)
    }
    await connection2.close()
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.PGmasterScript()
    } else if (this.flag == 1) {
      console.log('PGMASTER');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.PGmasterScript()
    }
  }

  //SHMASTER with offset and limit
  async SHmasterCORRECTION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT NOTFOUNDSHMASTER.*,  
              CATEGORYMASTER.CODE AS ACCATG , 
               SCHEMAST.TYPEID AS ACTYPE1 ,
               NOTFOUNDSHMASTER.AC_TYPE AS SHTYPE,
               NOTFOUNDSHMASTER.AC_NO AS SHAC_NO, 
               OWNBRANCHMASTER.CODE AS BRANCH_CODE1 FROM NOTFOUNDSHMASTER 
               LEFT JOIN CATEGORYMASTER ON NOTFOUNDSHMASTER.AC_CATG=CATEGORYMASTER.CODE 
               LEFT JOIN OWNBRANCHMASTER ON NOTFOUNDSHMASTER.AC_BRANCH= OWNBRANCHMASTER.CODE  
               LEFT JOIN SCHEMAST ON NOTFOUNDSHMASTER.AC_TYPE= SCHEMAST.S_APPL order by NOTFOUNDSHMASTER.AC_NO 
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDSHMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.SHMASTERSCRIPTWITHLIMIT(data);
  }
  async SHmasterScript() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT SHMASTER.*,  
              CATEGORYMASTER.CODE AS ACCATG , 
               SCHEMAST.TYPEID AS ACTYPE1 ,
               SHMASTER.AC_TYPE AS SHTYPE,
               SHMASTER.AC_NO AS SHAC_NO, 
               OWNBRANCHMASTER.CODE AS BRANCH_CODE1 FROM SHMASTER 
               LEFT JOIN CATEGORYMASTER ON SHMASTER.AC_CATG=CATEGORYMASTER.CODE 
               LEFT JOIN OWNBRANCHMASTER ON SHMASTER.AC_BRANCH= OWNBRANCHMASTER.CODE  
               LEFT JOIN SCHEMAST ON SHMASTER.AC_TYPE= SCHEMAST.S_APPL order by SHMASTER.AC_NO 
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from SHMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.SHMASTERSCRIPTWITHLIMIT(data);
  }
  async SHMASTERSCRIPTWITHLIMIT(data) {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let dpmasterData = await this.SHMASTERService.find()
    for (let ele of data) {
      //idmaster find   
      if (ele.ACTYPE1 == null) {
        continue;
      }
      let idmasterID
      if (ele.AC_CUSTID != null) {
        let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
        let IDMASTER = await this.jsonConverter(CUSTID);
        for (let eleme of IDMASTER) {
          idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
        }
      }
      if (idmasterID == undefined) {
        continue;
      }
      //directormaster find
      let directorID = null
      if (ele.AC_DIRECT != null) {
        let direct = await connection2.execute(`select NAME from DIRECTORMASTER where CODE=${ele.AC_DIRECT}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          directorID = (this.PostdirectorMaster.find(directorMaster => directorMaster['NAME'] == deleme.NAME))
        }
      }
      let categoryID = null
      if (ele.ACCATG != null) {
        //categorymaster find
        let categoryM = await connection2.execute(`select NAME from CATEGORYMASTER where CODE=${ele.ACCATG}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          categoryID = (this.PostCategoryMaster.find(category => category['NAME'] == celeme.NAME))
        }
      }
      let schemastData = this.PostSchemast.filter(ele1 => ele1['id'] == ele.ACTYPE1);
      let acno = Number(ele.AC_NO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let dpmasterDuplicate = dpmasterData.filter(ele2 => ele2['BANKACNO'] == BANKACNO);
      if (dpmasterDuplicate.length != 0) {
        continue;
      }
      let newObj = new SHMASTER();
      newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
      newObj['AC_NO'] = acno;
      newObj['AC_CUSTID'] = idmasterID.id;
      newObj['AC_NAME'] = ele.AC_NAME;
      newObj['EMP_NO'] = ele.EMP_NO;
      newObj['AC_IS_RECOVERY'] = ele.AC_IS_RECOVERY == null ? '0' : ele.AC_IS_RECOVERY;
      newObj['AC_INSTALLMENT'] = ele.AC_INSTALLMENT;
      newObj['AC_JOIN_DATE'] = ele.AC_JOIN_DATE == '' || ele.AC_JOIN_DATE == null ? null : moment(ele.AC_JOIN_DATE).format('DD/MM/YYYY');
      newObj['AC_RETIRE_DATE'] = ele.AC_RETIRE_DATE == '' || ele.AC_RETIRE_DATE == null ? null : moment(ele.AC_RETIRE_DATE).format('DD/MM/YYYY');
      newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? null : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
      newObj['AC_SHBALDATE'] = ele.AC_SHBALDATE == '' || ele.AC_SHBALDATE == null ? null : moment(ele.AC_SHBALDATE).format('DD/MM/YYYY');
      newObj['MEMBERSHIP_BY'] = ele.MEMBERSHIP_BY;
      newObj['AC_SREPRESENT'] = ele.AC_SREPRESENT == undefined ? null : ele.AC_SREPRESENT;
      newObj['AC_EXPDT'] = ele.AC_EXPDT == '' || ele.AC_EXPDT == null ? null : moment(ele.AC_EXPDT).format('DD/MM/YYYY');
      newObj['DEATH_DATE'] = ele.DEATH_DATE == '' || ele.DEATH_DATE == null ? null : moment(ele.DEATH_DATE).format('DD/MM/YYYY');
      newObj['AC_SBNO'] = ele.AC_SBNO;
      newObj['AC_RESNO'] = ele.RESULATION_NO;
      newObj['REF_ACNO'] = ele.REF_ACNO;
      newObj['AC_NARR'] = ele.AC_NARR == undefined ? null : ele.AC_NARR;
      newObj['AC_OP_SHNO'] = ele.AC_OP_SHNO;
      newObj['AC_FACE_VALUE'] = ele.AC_FACE_VALUE;
      newObj['AC_OP_BAL'] = ele.AC_OP_BAL;
      newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS == undefined ? null : ele.AC_FREEZE_STATUS;
      newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT == undefined ? 0 : ele.AC_FREEZE_AMOUNT;
      newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == undefined || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
      newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON == undefined ? null : ele.AC_FREEZE_REASON;
      newObj['status'] = 1;
      newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
      newObj['AC_RESDT'] = ele.RESULATION_DATE == '' || ele.RESULATION_DATE == null ? null : moment(ele.RESULATION_DATE).format('DD/MM/YYYY');
      newObj['AC_OP_CD'] = ele.AC_OP_CD;
      newObj['AC_CLOSED'] = ele.AC_CLOSED == -1 ? '1' : ele.AC_CLOSED
      newObj['AC_DEV_NAME'] = ele.AC_DEV_NAME;
      newObj['AC_DEV_WARD'] = ele.AC_DEV_WARD;
      newObj['AC_DEV_ADD'] = ele.AC_DEV_ADD == undefined ? null : ele.AC_DEV_ADD;
      newObj['AC_DEV_GALLI'] = ele.AC_DEV_GALLI;
      newObj['AC_DEV_AREA'] = ele.AC_DEV_AREA;
      newObj['AC_DEV_CITYCODE'] = ele.AC_DEV_CITYCODE == undefined ? null : ele.AC_DEV_CITYCODE;
      newObj['AC_BRANCH'] = this.BRANCH_CODE + '';
      //relation
      newObj['DIV_TRANSFER_ACTYPE'] = ele.DIV_TRANSFER_ACTYPE;
      newObj['DIV_TRANSFER_ACNO'] = ele.DIV_TRANSFER_ACNO == 0 ? null : ele.DIV_TRANSFER_ACNO;
      newObj['DIV_TRANSFER_ACNOTYPE'] = ele.DIV_TRANSFER_ACNOTYPE;
      newObj['DIV_TRANSFER_BRANCH'] = this.BRANCH_CODE;
      newObj['AC_SALARYDIVISION_CODE'] = ele.AC_SALARYDIVISION_CODE == 0 ? null : ele.AC_SALARYDIVISION_CODE;
      newObj['SUB_SALARYDIVISION_CODE'] = ele.SUB_SALARYDIVISION_CODE == 0 ? null : ele.SUB_SALARYDIVISION_CODE;
      newObj['idmasterID'] = idmasterID.id;
      newObj['AC_DIRECT'] = directorID?.id;
      newObj['AC_CATG'] = categoryID?.id
      newObj['BRANCH_CODE'] = this.BRANCH_CODE
      newObj['AC_TYPE'] = ele.ACTYPE1
      newObj['BANKACNO'] = BANKACNO;
      newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE;
      let shmasterinsert = await this.SHMASTERService.save(newObj);
      let nomniee = await this.nomineelink('SHMASTER', 'SH', ele.SHTYPE, ele.SHAC_NO, shmasterinsert.id)
    }
    await connection2.close()
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.SHmasterScript()
    } else if (this.flag == 1) {
      console.log('SHMASTER');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.SHmasterScript()
    }
  }
  async updateBal(ele) {
    let strSQL = `update ACMASTER SET "AC_OP_BAL"='${ele.AC_OP_BAL}' , "AC_OP_CD"='${ele.AC_OP_CD}' WHERE ID=${ele.id}`;
    let result = await getManager().query(strSQL);
  }
  //DPMASTER WITH OFFSET AND LIMIT 
  async DPMASTERCorrection() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT NOTFOUNDDPMASTER.*, SCHEMAST.TYPEID AS AC_TYPE1         
     FROM NOTFOUNDDPMASTER  LEFT JOIN SCHEMAST ON NOTFOUNDDPMASTER.AC_TYPE= SCHEMAST.S_APPL  ORDER BY NOTFOUNDDPMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDDPMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.DPMASTERSCRIPTWITHLIMIT(data);
  }
  async DPMASTERScript() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(
      `select * from (
            select rownum offset, rs.* from (
              SELECT DPMASTER.*, SCHEMAST.TYPEID AS AC_TYPE1         
     FROM DPMASTER  LEFT JOIN SCHEMAST ON DPMASTER.AC_TYPE= SCHEMAST.S_APPL  ORDER BY DPMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`
    );
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DPMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.DPMASTERSCRIPTWITHLIMIT(data);
  }
  async DPMASTERSCRIPTWITHLIMIT(data) {
    let dpmasterData = await this.DPMASTERService.find()
    let balcata = await this.BALACATAService.find()
    let operations = await this.OPERATIONMASTERService.find()
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    for (let ele of data) {
      if (ele.AC_TYPE1 == null) {
        continue;
      }
      let idmasterID
      if (ele.AC_CUSTID != null) {
        let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
        let IDMASTER = await this.jsonConverter(CUSTID);
        for (let eleme of IDMASTER) {
          idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
        }
      }

      if (idmasterID == undefined) {
        continue;
      }
      let pigmy_TYPE = null
      if (ele.PIGMY_ACTYPE != null) {
        let AGENTTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.PIGMY_ACTYPE}`)
        pigmy_TYPE = await this.jsonConverter(AGENTTYPE);
      }
      let mem_TYPE = null
      if (ele.AC_MEMBTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.AC_MEMBTYPE}`)
        mem_TYPE = await this.jsonConverter(memTYPE);
      }
      let categoryID = null
      if (ele.AC_CATG != null) {
        //categorymaster find
        let categoryM = await connection2.execute(`select NAME from CATEGORYMASTER where CODE=${ele.AC_CATG}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          categoryID = (this.PostCategoryMaster.find(category => category['NAME'] == celeme.NAME))
        }
      }
      let OperationID = null
      if (ele.AC_OPR_CODE != null) {
        //operationmaster find
        let categoryM = await connection2.execute(`select NAME from operationmaster where CODE=${ele.AC_OPR_CODE}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          OperationID = (operations.find(operations => operations['NAME'] == celeme.NAME))
        }
      }
      let intcategoryID = null
      if (ele.AC_INTCATA != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.AC_INTCATA}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          intcategoryID = (this.PostInterestCategoryData.find(intCategory => intCategory['NAME'] == celeme.NAME))
        }
      }
      let AC_INTROBRANCHID = null
      if (ele.AC_INTROBRANCH != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select NAME from OWNBRANCHMASTER where CODE=${ele.AC_INTROBRANCH}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          AC_INTROBRANCHID = (this.PostBranch.find(ownbranchmaster => ownbranchmaster['NAME'] == celeme.NAME))
        }
      }
      let BALCATAID = null
      if (ele.AC_BALCATG != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select BC_NAME from BALACATA where BC_CODE=${ele.AC_BALCATG}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          BALCATAID = (balcata.find(balcata => balcata['BC_NAME'] == celeme.BC_NAME))
        }
      }
      let schemastData = this.PostSchemast.filter(ele1 => ele1['id'] == ele.AC_TYPE1);
      let TD_ACTYPE = null
      if (ele.TD_ACTYPE != null) {
        let AGENTTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${Number(ele.TD_ACTYPE)}`)
        TD_ACTYPE = await this.jsonConverter(AGENTTYPE);
      }
      let lockerSchemeData = null
      if (TD_ACTYPE.length != 0) {
        lockerSchemeData = this.PostSchemast.filter(ele => ele['id'] == TD_ACTYPE[0].TYPEID);
      }
      let acno = Number(ele.AC_NO) + 100000
      let TDACNO = Number(ele.TD_ACNO) + 100000
      let AC_MEMBNO = ele.AC_MEMBNO == 0 ? null : Number(ele.AC_MEMBNO) + 100000
      let TD_ACNO = null
      TD_ACTYPE.length == 0 ? TD_ACNO = null : TD_ACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + lockerSchemeData[0]?.S_APPL + TDACNO
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let dpmasterDuplicate = dpmasterData.filter(ele2 => ele2['BANKACNO'] == BANKACNO);
      if (dpmasterDuplicate.length != 0) {
        continue;
      }
      let newObj = new DPMASTER();
      let AC_INTRACNO = ele.AC_INTRACNO == null ? null : Number(ele.AC_INTRACNO) + 100000
      newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
      newObj['AC_NO'] = acno;
      newObj['AC_CUSTID'] = idmasterID.id;
      newObj['AC_NAME'] = ele.AC_NAME;
      newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? null : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
      newObj['AC_SCHMAMT'] = ele.AC_SCHMAMT;
      newObj['REF_ACNO'] = ele.REF_ACNO;
      newObj['AC_MBDATE'] = ele.AC_MBDATE == '' || ele.AC_MBDATE == null ? null : moment(ele.AC_MBDATE).format('DD/MM/YYYY');
      newObj['AC_GRDNAME'] = ele.AC_GRDNAME;
      newObj['AC_GRDRELE'] = ele.AC_GRDRELE;
      newObj['AC_INTROID'] = ele.AC_INTROID;
      newObj['AC_INTRACNO'] = AC_INTRACNO + '';
      newObj['AC_INTRNAME'] = ele.AC_INTRNAME;
      newObj['SIGNATURE_AUTHORITY'] = ele.SIGNATURE_AUTHORITY;
      newObj['AC_PROPRITOR_NAME'] = ele.AC_PROPRITOR_NAME;
      newObj['PIGMY_ACTYPE'] = pigmy_TYPE == null ? null : pigmy_TYPE[0].TYPEID;
      newObj['INVEST_BRANCH'] = ele.INVEST_BRANCH;
      newObj['INVEST_BANK'] = ele.INVEST_BANK;
      newObj['AC_REF_RECEIPTNO'] = ele.AC_REF_RECEIPTNO;
      newObj['AC_ASON_DATE'] = ele.AC_ASON_DATE == '' || ele.AC_ASON_DATE == null ? null : moment(ele.AC_ASON_DATE).format('DD/MM/YYYY');
      newObj['AC_EXPDT'] = ele.AC_EXPDT == '' || ele.AC_EXPDT == null ? null : moment(ele.AC_EXPDT).format('DD/MM/YYYY');
      newObj['AC_MONTHS'] = ele.AC_MONTHS;
      newObj['AC_DAYS'] = ele.AC_DAYS;
      newObj['AC_INTRATE'] = ele.AC_INTRATE;
      newObj['AC_MATUAMT'] = ele.AC_MATUAMT;
      newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
      newObj['AC_PARTICULAR'] = ele.AC_PARTICULAR;
      newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS;
      newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT;
      newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == '' || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
      newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON;
      newObj['AC_ODAMT'] = ele.AC_ODAMT;
      newObj['AC_SODAMT'] = ele.AC_SODAMT;
      newObj['AC_ODDAYS'] = ele.AC_ODDAYS;
      newObj['AC_ODDATE'] = ele.AC_ODDATE == '' || ele.AC_ODDATE == null ? null : moment(ele.AC_ODDATE).format('DD/MM/YYYY');
      newObj['IS_DISCOUNTED_INT_RATE'] = ele.IS_DISCOUNTED_INT_RATE == 0 ? '0' : '1';
      newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].TYPEID;
      newObj['AC_MEMBNO'] = AC_MEMBNO + '';
      newObj['BANKACNO'] = BANKACNO;
      newObj['AC_MINOR'] = ele.AC_MINOR == 0 ? '0' : '1';
      newObj['AC_IS_RECOVERY'] = ele.AC_IS_RECOVERY == 0 ? '0' : '1';
      newObj['status'] = 1;
      newObj['IS_POST_INT_AC'] = ele.IS_POST_INT_AC == 0 ? 0 : 1;
      newObj['AC_OP_CD'] = ele.AC_OP_CD;
      newObj['AC_OP_BAL'] = ele.AC_OP_BAL;
      newObj['AC_CLOSED'] = ele.AC_CLOSED == 0 ? '0' : '1';
      newObj['IS_DORMANT'] = ele.IS_DORMANT == 0 ? false : true;
      newObj['AC_PRODUCT'] = ele.AC_PRODUCT;
      newObj['AC_LINTEDT'] = ele.AC_LINTEDT == '' || ele.AC_LINTEDT == null ? null : moment(ele.AC_LINTEDT).format('DD/MM/YYYY');
      newObj['AC_BALDATE'] = ele.AC_BALDATE == '' || ele.AC_BALDATE == null ? null : moment(ele.AC_BALDATE).format('DD/MM/YYYY');
      newObj['AC_ACTDATE'] = ele.AC_ACTDATE == '' || ele.AC_ACTDATE == null ? null : moment(ele.AC_ACTDATE).format('DD/MM/YYYY');
      newObj['AC_PINT_OP'] = ele.AC_PINT_OP;
      newObj['AC_PAYBLEINT_OP'] = ele.AC_PAYBLEINT_OP;
      newObj['AC_ODEPINS'] = ele.AC_ODEPINS;
      newObj['AC_PAID_INT_OP'] = ele.AC_PAID_INT_OP;
      newObj['OP_CR_INT_FIN_YEAR'] = ele.OP_CR_INT_FIN_YEAR;
      newObj['OP_INT_PAID_FIN_YEAR'] = ele.OP_INT_PAID_FIN_YEAR;
      newObj['AUTO_MATURED_PAYABLEAMT'] = ele.AUTO_MATURED_PAYABLEAMT;
      newObj['AUTO_MATURED_INTERESTAMT'] = ele.AUTO_MATURED_INTERESTAMT;
      newObj['AC_KEYWORD'] = ele.AC_KEYWORD;
      newObj['LAST_TDS_DATE'] = ele.LAST_TDS_DATE == '' || ele.LAST_TDS_DATE == null ? null : moment(ele.LAST_TDS_DATE).format('DD/MM/YYYY');
      newObj['AC_LINTDT'] = ele.AC_LINTDT == '' || ele.AC_LINTDT == null ? null : moment(ele.AC_LINTDT).format('DD/MM/YYYY');
      newObj['LOCKER_NO'] = ele.LOCKER_NO
      newObj['RACK_NO'] = ele.RACK_NO
      newObj['TD_ACTYPE'] = TD_ACTYPE.length == 0 ? null : TD_ACTYPE[0].TYPEID;
      newObj['TD_ACNO'] = ele.TD_ACNO == 0 ? null : TD_ACNO
      //RELATION
      newObj['AC_INTROBRANCH'] = AC_INTROBRANCHID == null ? null : AC_INTROBRANCHID?.id;
      newObj['idmasterID'] = idmasterID.id;
      newObj['AC_INTCATA'] = intcategoryID == null ? null : intcategoryID?.id;
      newObj['AC_CATG'] = categoryID == null ? null : categoryID?.id;
      newObj['AC_BALCATG'] = BALCATAID == null ? null : BALCATAID?.id;
      newObj['AC_OPR_CODE'] = OperationID == null ? null : OperationID?.id;
      newObj['BRANCH_CODE'] = this.BRANCH_CODE
      newObj['AC_TYPE'] = ele.AC_TYPE1
      newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
      let master = await this.DPMASTERService.save(newObj);
      let nomniee = await this.nomineelink('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id)
      let attorney = await this.atteroney('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id)
      let joint = await this.jointAc('DPMASTER', ele.AC_ACNOTYPE, ele.AC_TYPE, ele.AC_NO, master.id)
    }
    await connection2.close()
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.DPMASTERScript()
    } else if (this.flag == 1) {
      console.log('DPMASTER');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.DPMASTERScript()
    }
  }
  //lnmaster with offset and limit
  async lnmasterCorrection() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
            select rownum offset, rs.* from (
              SELECT NOTFOUNDLNMASTER.*,  SCHEMAST.TYPEID AS AC_TYPE1  from NOTFOUNDLNMASTER  
              LEFT JOIN SCHEMAST ON NOTFOUNDLNMASTER.AC_TYPE= SCHEMAST.S_APPL  ORDER BY NOTFOUNDLNMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from NOTFOUNDLNMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.LNMASTERSCRIPTWITHLIMIT(data);
  }
  //lnmaster with offset and limit
  async lnmasterScript() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
            select rownum offset, rs.* from (
               SELECT LNMASTER.*,  SCHEMAST.TYPEID AS AC_TYPE1  from LNMASTER  
               LEFT JOIN SCHEMAST ON LNMASTER.AC_TYPE= SCHEMAST.S_APPL  ORDER BY LNMASTER.AC_NO
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from LNMASTER`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.LNMASTERSCRIPTWITHLIMIT(data);
  }
  async LNMASTERSCRIPTWITHLIMIT(data) {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let authorityMaster = await this.AUTHORITYMASTERService.find()
    let recovercleark = await this.RECOVERYCLEARKMASTERService.find()
    let priorityMaster = await this.PRIORITYSECTORMASTERService.find()
    let WEAKERMASTER = await this.WEAKERMASTERService.find()
    let purpose = await this.PURPOSEMASTERService.find()
    let industry = await this.INDUSTRYMASTERService.find()
    let health = await this.HEALTHMASTERService.find()
    let dpmasterData = await this.SHMASTERService.find()
    for (let ele of data) {
      if (ele.AC_TYPE1 == null) {
        continue;
      }
      let idmasterID
      if (ele.AC_CUSTID != null) {
        let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
        let IDMASTER = await this.jsonConverter(CUSTID);
        for (let eleme of IDMASTER) {
          idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
        }
      }

      if (idmasterID == undefined) {
        continue;
      }
      let authorityID = null
      if (ele.AC_AUTHORITY != null) {
        let categoryM = await connection2.execute(`select NAME from AUTHORITYMASTER where CODE=${ele.AC_AUTHORITY}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          authorityID = (authorityMaster.find(authorityMaster => authorityMaster['NAME'] == celeme.NAME))
        }
      }
      let intcategoryID = null
      if (ele.AC_INTCATA != null) {
        //intrate category master find
        let categoryM = await connection2.execute(`select NAME from INTCATEGORYMASTER where CODE=${ele.AC_INTCATA}`)
        let categoryMaster = await this.jsonConverter(categoryM);
        for (let celeme of categoryMaster) {
          intcategoryID = (this.PostInterestCategoryData.find(intCategory => intCategory['NAME'] == celeme.NAME))
        }
      }
      //directormaster find
      let directorID = null
      if (ele.AC_RECOMMEND_BY != null) {
        let direct = await connection2.execute(`select NAME from DIRECTORMASTER where CODE=${ele.AC_RECOMMEND_BY}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          directorID = (this.PostdirectorMaster.find(directorMaster => directorMaster['NAME'] == deleme.NAME))
        }
      }
      //directormaster find
      let directormastID = null
      if (ele.AC_DIRECTOR != null && ele.AC_DIRECTOR != 0) {
        let direct = await connection2.execute(`select NAME from DIRECTORMASTER where CODE=${ele.AC_DIRECTOR}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          directormastID = (this.PostdirectorMaster.find(directorMaster => directorMaster['NAME'] == deleme.NAME))
        }
      }
      //directormaster find
      let recoverclearkID = null
      if (ele.AC_RECOVERY_CLERK != null) {
        let direct = await connection2.execute(`select NAME from recoveryclearkmaster where CODE=${ele.AC_RECOVERY_CLERK}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          recoverclearkID = (recovercleark.find(recovercleark => recovercleark['NAME'] == deleme.NAME))
        }
      }
      let priorityID = null
      if (ele.AC_PRIORITY != null) {
        let direct = await connection2.execute(`select NAME from PRIORITYMASTER where CODE=${ele.AC_PRIORITY}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          priorityID = (priorityMaster.find(priorityMaster => priorityMaster['NAME'] == deleme.NAME))
        }
      }
      let AC_WEAKERID = null
      if (ele.AC_WEAKER != null) {
        let direct = await connection2.execute(`select NAME from weakermaster where CODE=${ele.AC_WEAKER}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          AC_WEAKERID = (WEAKERMASTER.find(WEAKERMASTER => WEAKERMASTER['NAME'] == deleme.NAME))
        }
      }
      let AC_PURPOSE = null
      if (ele.AC_WEAKER != null) {
        let direct = await connection2.execute(`select NAME from purposemaster where CODE=${ele.AC_PURPOSE}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          AC_PURPOSE = (purpose.find(purpose => purpose['NAME'] == deleme.NAME))
        }
      }
      let AC_INDUSTRY = null
      if (ele.AC_INDUSTRY != null) {
        let direct = await connection2.execute(`select NAME from industrymaster where CODE=${ele.AC_INDUSTRY}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          AC_INDUSTRY = (industry.find(industry => industry['NAME'] == deleme.NAME))
        }
      }
      let AC_HEALTH = null
      if (ele.AC_HEALTH != null) {
        let direct = await connection2.execute(`select NAME from healthmaster where CODE=${ele.AC_HEALTH}`)
        let directormaster = await this.jsonConverter(direct);
        for (let deleme of directormaster) {
          AC_HEALTH = (health.find(health => health['NAME'] == deleme.NAME))
        }
      }
      let schemastData = this.PostSchemast.filter(ele1 => ele1['id'] == ele.AC_TYPE1);
      let acno = Number(ele.AC_NO) + 100000
      let AC_MEMBNO = Number(ele.AC_MEMBNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let dpmasterDuplicate = dpmasterData.filter(ele4 => ele4['BANKACNO'] == BANKACNO);
      if (dpmasterDuplicate.length != 0) {
        continue;
      }
      let mem_TYPE = null
      if (ele.AC_MEMBTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.AC_MEMBTYPE}`)
        mem_TYPE = await this.jsonConverter(memTYPE);
      }
      let newObj = new LNMASTER();
      newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
      newObj['AC_NO'] = acno;
      newObj['AC_CUSTID'] = idmasterID.id;
      newObj['AC_NAME'] = ele.AC_NAME;
      newObj['AC_OPDATE'] = ele.AC_OPDATE == '' || ele.AC_OPDATE == null ? '' : moment(ele.AC_OPDATE).format('DD/MM/YYYY');
      newObj['AC_OPEN_OLD_DATE'] = ele.AC_OPEN_OLD_DATE == '' || ele.AC_OPEN_OLD_DATE == null ? null : moment(ele.AC_OPEN_OLD_DATE).format('DD/MM/YYYY');
      newObj['AC_IS_RECOVERY'] = ele.AC_IS_RECOVERY == 0 ? '0' : '1';
      newObj['REF_ACNO'] = ele.REF_ACNO;
      newObj['AC_SANCTION_AMOUNT'] = ele.AC_SANCTION_AMOUNT;
      newObj['AC_SANCTION_DATE'] = ele.AC_SANCTION_DATE == '' || ele.AC_SANCTION_DATE == null ? null : moment(ele.AC_SANCTION_DATE).format('DD/MM/YYYY');
      newObj['AC_DRAWPOWER_AMT'] = ele.AC_DRAWPOWER_AMT;
      newObj['AC_MONTHS'] = ele.AC_MONTHS;
      newObj['AC_EXPIRE_DATE'] = ele.AC_EXPIRE_DATE == '' || ele.AC_EXPIRE_DATE == null ? null : moment(ele.AC_EXPIRE_DATE).format('DD/MM/YYYY');
      newObj['AC_INTRATE'] = ele.AC_INTRATE;
      newObj['AC_REPAYMODE'] = ele.AC_REPAYMODE;
      newObj['INSTALLMENT_METHOD'] = ele.INSTALLMENT_METHOD;
      newObj['AC_INSTALLMENT'] = ele.AC_INSTALLMENT;
      newObj['AC_MORATORIUM_PERIOD'] = ele.AC_MORATORIUM_PERIOD;
      newObj['AC_GRACE_PERIOD'] = ele.AC_GRACE_PERIOD;
      newObj['AC_PRIORITY_SUB1'] = ele.AC_PRIORITY_SUB1;
      newObj['AC_PRIORITY_SUB2'] = ele.AC_PRIORITY_SUB2;
      newObj['AC_PRIORITY_SUB3'] = ele.AC_PRIORITY_SUB3;
      newObj['AC_RELATION_TYPE'] = ele.AC_RELATION_TYPE;
      newObj['AC_DIRECTOR_RELATION'] = ele.AC_DIRECTOR_RELATION;
      newObj['AC_COREG_NO'] = ele.AC_COREG_NO;
      newObj['AC_COREG_DATE'] = ele.AC_COREG_DATE == '' || ele.AC_COREG_DATE == null ? null : moment(ele.AC_COREG_DATE).format('DD/MM/YYYY');
      newObj['AC_COREG_AMT'] = ele.AC_COREG_AMT;
      newObj['AC_RESO_NO'] = ele.AC_RESO_NO;
      newObj['AC_RESO_DATE'] = ele.AC_RESO_DATE == '' || ele.AC_RESO_DATE == null ? null : moment(ele.AC_RESO_DATE).format('DD/MM/YYYY');
      newObj['AC_FREEZE_STATUS'] = ele.AC_FREEZE_STATUS;
      newObj['AC_FREEZE_AMOUNT'] = ele.AC_FREEZE_AMOUNT;
      newObj['AC_FREEZE_DATE'] = ele.AC_FREEZE_DATE == '' || ele.AC_FREEZE_DATE == null ? null : moment(ele.AC_FREEZE_DATE).format('DD/MM/YYYY');
      newObj['AC_FREEZE_REASON'] = ele.AC_FREEZE_REASON;
      newObj['AC_ODAMT'] = ele.AC_ODAMT;
      newObj['AC_SODAMT'] = ele.AC_SODAMT;
      newObj['AC_ODDAYS'] = ele.AC_ODDAYS;
      newObj['AC_ODDATE'] = ele.AC_ODDATE == '' || ele.AC_ODDATE == null ? null : moment(ele.AC_ODDATE).format('DD/MM/YYYY');
      newObj['status'] = 1;
      newObj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
      newObj['AC_OP_CD'] = ele.AC_OP_CD;
      newObj['AC_CLOSED'] = ele.AC_CLOSED == 0 ? 0 : 1;
      newObj['IS_AGGRI_LOAN'] = ele.IS_AGGRI_LOAN == 0 ? 0 : 1;
      newObj['IS_DORMANT'] = ele.IS_DORMANT == 0 ? false : true;
      newObj['IS_WEAKER'] = ele.IS_WEAKER == 0 ? '0' : '1';
      newObj['AC_REMARK'] = ele.AC_REMARK;
      newObj['AC_ACTDATE'] = ele.AC_ACTDATE == '' || ele.AC_ACTDATE == null ? null : moment(ele.AC_ACTDATE).format('DD/MM/YYYY');
      newObj['AC_OP_TOTAL_DEPOSITAMT'] = ele.AC_OP_TOTAL_DEPOSITAMT;
      newObj['OP_POSTED_INT'] = ele.OP_POSTED_INT;
      newObj['IS_DISPUTE_LOAN'] = ele.IS_DISPUTE_LOAN == 0 ? '0' : '1';
      newObj['IS_POST_INT_AC'] = ele.IS_POST_INT_AC == 0 ? 0 : 1;
      newObj['AC_LINTEDT'] = ele.AC_LINTEDT == '' || ele.AC_LINTEDT == null ? null : moment(ele.AC_LINTEDT).format('DD/MM/YYYY');
      newObj['AC_BALDATE'] = ele.AC_BALDATE == '' || ele.AC_BALDATE == null ? null : moment(ele.AC_BALDATE).format('DD/MM/YYYY');
      newObj['AC_PAID_INT_OP'] = ele.AC_PAID_INT_OP;
      newObj['AC_RECBLEODUEINT_OP'] = ele.AC_RECBLEODUEINT_OP;
      newObj['AC_SECURITY_AMT'] = ele.AC_SECURITY_AMT;
      newObj['OP_NPA_DATE'] = ele.OP_NPA_DATE == '' || ele.OP_NPA_DATE == null ? null : moment(ele.OP_NPA_DATE).format('DD/MM/YYYY');
      newObj['AC_LINTDT'] = ele.AC_LINTDT == '' || ele.AC_LINTDT == null ? null : moment(ele.AC_LINTDT).format('DD/MM/YYYY');
      newObj['AC_MEMBTYPE'] = mem_TYPE == null ? null : mem_TYPE[0].TYPEID;
      newObj['AC_MEMBNO'] = AC_MEMBNO + '';
      newObj['AC_OP_BAL'] = ele.AC_OP_BAL;
      newObj['AC_PAYBLEINT_OP'] = ele.AC_PAYBLEINT_OP;
      newObj['AC_PINT_OP'] = ele.AC_PINT_OP;
      newObj['AC_RECBLEINT_OP'] = ele.AC_RECBLEINT_OP;
      //relation
      newObj['idmasterID'] = idmasterID.id;
      newObj['AC_INTCATA'] = intcategoryID == null ? null : intcategoryID?.id;
      newObj['AC_AUTHORITY'] = authorityID == null ? null : authorityID?.id;
      newObj['AC_RECOMMEND_BY'] = directorID == null ? null : directorID?.id;
      newObj['AC_RECOVERY_CLERK'] = recoverclearkID == null ? null : recoverclearkID?.id;
      newObj['AC_PRIORITY'] = priorityID == null ? null : priorityID?.id;
      newObj['AC_WEAKER'] = AC_WEAKERID == null ? null : AC_WEAKERID?.id;
      newObj['AC_PURPOSE'] = AC_PURPOSE == null ? null : AC_PURPOSE?.id;
      newObj['AC_INDUSTRY'] = AC_INDUSTRY == null ? null : AC_INDUSTRY?.id;
      newObj['AC_DIRECTOR'] = directormastID == null ? null : directormastID?.id;
      newObj['AC_HEALTH'] = AC_HEALTH == null ? null : AC_HEALTH?.id;
      newObj['BRANCH_CODE'] = this.BRANCH_CODE
      newObj['BANKACNO'] = BANKACNO;
      newObj['AC_TYPE'] = ele.AC_TYPE1;
      newObj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
      let LNAC = await this.LNMASTERService.save(newObj);

      //SECURITYDETAILS TABLE
      let securitydetails = await connection2.execute(`SELECT SECURITYDETAILS .*, schemast.typeid as ACTYPE  from  
      SECURITYDETAILS left join schemast on securitydetails.ac_type=schemast.s_appl where SECURITYDETAILS.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND SECURITYDETAILS.AC_TYPE = ${ele.AC_TYPE} AND SECURITYDETAILS.AC_NO = ${ele.AC_NO}`)
      let security = await this.jsonConverter(securitydetails);
      for (let element of security) {
        let security = new SECURITYDETAILS();
        security['AC_ACNOTYPE'] = element.AC_ACNOTYPE;
        security['AC_TYPE'] = element.ACTYPE;
        security['AC_NO'] = BANKACNO;
        security['SECURITY_CODE'] = element.SECURITY_CODE;
        security['SECURITY_VALUE'] = element.SECURITY_VALUE;
        security['lnmasterID'] = LNAC.id;
        await this.SECURITYDETAILSService.insert(security);
      }
      //GUARANTERDETAILS
      let guaranterdetails = await connection2.execute(`SELECT GUARANTERDETAILS .*, schemast.typeid as ACTYPE  from  GUARANTERDETAILS left join schemast on GUARANTERDETAILS.ac_type=schemast.s_appl where GUARANTERDETAILS.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND GUARANTERDETAILS.AC_TYPE = ${ele.AC_TYPE} AND GUARANTERDETAILS.AC_NO = ${ele.AC_NO}`)
      let guaranterdetail = await this.jsonConverter(guaranterdetails);
      for (let guaranter of guaranterdetail) {
        let newObj = new GUARANTERDETAILS();
        let mem_TYPE = null
        if (ele.MEMBER_TYPE != null) {
          let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${ele.MEMBER_TYPE}`)
          mem_TYPE = await this.jsonConverter(memTYPE);
        }
        let idmasterID
        if (ele.AC_CUSTID != null) {
          let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
          let IDMASTER = await this.jsonConverter(CUSTID);
          for (let eleme of IDMASTER) {
            idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
          }
        }
        if (idmasterID == undefined) {
          continue;
        }
        let AC_MEMBNO = Number(guaranter.MEMBER_NO) + 100000
        newObj['AC_ACNOTYPE'] = guaranter.AC_ACNOTYPE;
        newObj['AC_NO'] = BANKACNO;
        newObj['AC_TYPE'] = LNAC.AC_TYPE + '';
        newObj['MEMBER_TYPE'] = mem_TYPE == null ? null : mem_TYPE[0].TYPEID;
        newObj['MEMBER_NO'] = AC_MEMBNO + '';
        newObj['EXP_DATE'] = guaranter.EXP_DATE == '' || guaranter.EXP_DATE == null ? null : moment(guaranter.EXP_DATE).format('DD/MM/YYYY');
        newObj['AC_NAME'] = guaranter.NAME;
        newObj['GAC_CUSTID'] = idmasterID.id;
        newObj['lnmasterID'] = LNAC.id;
        await this.GUARANTERDETAILSService.save(newObj);
      }

      //COBORROWER
      let coborrowerDeatils = await connection2.execute(`SELECT COBORROWER.*, schemast.typeid as ACTYPE  from  COBORROWER left join schemast on COBORROWER.ac_type = schemast.s_appl where COBORROWER.AC_ACNOTYPE = '${ele.AC_ACNOTYPE}' AND COBORROWER.AC_TYPE = ${ele.AC_TYPE} AND COBORROWER.AC_NO = ${ele.AC_NO}`)
      let coborrower = await this.jsonConverter(coborrowerDeatils);
      for (let coborrow of coborrower) {
        let idmasterID
        if (ele.AC_CUSTID != null) {
          let CUSTID = await connection2.execute(`select AC_NO from IDMASTER where AC_NO=${ele.AC_CUSTID}`)
          let IDMASTER = await this.jsonConverter(CUSTID);
          for (let eleme of IDMASTER) {
            idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == eleme.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
          }
        }
        if (idmasterID == undefined) {
          continue;
        }
        let CoBorrower = new COBORROWER();
        CoBorrower['AC_TYPE'] = LNAC.AC_TYPE + '';
        CoBorrower['AC_ACNOTYPE'] = coborrow.AC_ACNOTYPE
        CoBorrower['CAC_CUSTID'] = idmasterID.id
        CoBorrower['AC_NAME'] = coborrow.NAME
        CoBorrower['AC_NO'] = BANKACNO
        CoBorrower['lnmasterID'] = LNAC.id;
        const coborr = await this.COBORROWERService.insert(CoBorrower);
      }
      //LNACINTRATE
      let lnacint = await connection2.execute(`SELECT * FROM LNACINTRATE WHERE AC_ACNOTYPE='${ele.AC_ACNOTYPE}' AND AC_TYPE= ${ele.AC_TYPE} AND AC_NO=${ele.AC_NO} order by serial_no`)
      // SELECT * FROM LNACINTRATE WHERE AC_ACNOTYPE='LN' AND AC_TYPE=70400 AND AC_NO=400266
      let lnaccountint = await this.jsonConverter(lnacint);
      for (let ele of lnaccountint) {
        let newObj = new LNACINTRATE();
        newObj['AC_ACNOTYPE'] = ele.AC_ACNOTYPE;
        newObj['AC_NO'] = ele.AC_NO + 100000;
        newObj['AC_TYPE'] = LNAC.AC_TYPE
        newObj['OPENING_ENTRY'] = ele.OPENING_ENTRY == 0 ? 0 : 1;
        newObj['EFFECT_DATE'] = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY');
        newObj['SERIAL_NO'] = ele.SERIAL_NO;
        newObj['INT_RATE'] = ele.INT_RATE;
        newObj['PENAL_INT_RATE'] = ele.PENAL_INT_RATE;
        newObj['BRANCH_CODE'] = this.BRANCH_CODE;
        newObj['UPDATEFLAG'] = 1;
        newObj['LNMASTERID'] = LNAC.id;
        newObj['BANKACNO'] = BANKACNO;
        await this.LNACINTRATEService.save(newObj);
      }
    }
    await connection2.close()
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.lnmasterScript()
    } else if (this.flag == 1) {
      console.log('LNMASTER');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.lnmasterScript()
    }
  }

  //RENEWALHISTORY
  async RENEWALHISTORY() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select renewalhistory.*, schemast.typeid as actype from renewalhistory left join schemast on renewalhistory.ac_type=schemast.s_appl`)
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let ele of data) {
      let renew = new RENEWALHISTORY()
      let acno: number = 0
      let schemastData = this.PostSchemast.filter(ele1 => ele1['id'] == ele.ACTYPE);
      acno = 100000 + Number(ele.AC_NO)
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      renew['RENEWAL_DATE'] = ele.RENEWAL_DATE == '' || ele.RENEWAL_DATE == null ? null : moment(ele.RENEWAL_DATE).format('DD/MM/YYYY');
      renew['AC_RENEWAL_COUNTER'] = ele.AC_RENEWAL_COUNTER
      renew['AC_ACNOTYPE'] = ele.AC_ACNOTYPE
      renew['AC_TYPE'] = ele.ACTYPE
      renew['AC_NO'] = BANKACNO
      renew['OLD_MONTH'] = ele.OLD_MONTH
      renew['OLD_EXPIRY_DATE'] = ele.OLD_EXPIRY_DATE == '' || ele.OLD_EXPIRY_DATE == null ? null : moment(ele.OLD_EXPIRY_DATE).format('DD/MM/YYYY')
      renew['OLD_AC_ACNOTYPE'] = ele.AC_ACNOTYPE
      renew['OLD_SANCTION_LIMIT'] = ele.OLD_SANCTION_LIMIT
      renew['OLD_SANCTION_DATE'] = ele.OLD_SANCTION_DATE == '' || ele.OLD_SANCTION_DATE == null ? null : moment(ele.OLD_SANCTION_DATE).format('DD/MM/YYYY')
      renew['OLD_SECURITY_AMOUNT'] = ele.OLD_SECURITY_AMOUNT
      renew['OLD_DRAWING_POWER'] = ele.OLD_DRAWING_POWER
      renew['USER_CODE'] = ele.USER_CODE
      renew['NEW_MONTH'] = ele.NEW_MONTH
      renew['NEW_DAYS'] = ele.NEW_DAYS
      renew['NEW_OPEN_DATE'] = ele.NEW_OPEN_DATE == '' || ele.NEW_OPEN_DATE == null ? null : moment(ele.NEW_OPEN_DATE).format('DD/MM/YYYY');
      renew['NEW_ASON_DATE'] = ele.NEW_ASON_DATE == '' || ele.NEW_ASON_DATE == null ? null : moment(ele.NEW_ASON_DATE).format('DD/MM/YYYY');
      renew['NEW_EXPIRY_DATE'] = ele.NEW_EXPIRY_DATE == '' || ele.NEW_EXPIRY_DATE == null ? null : moment(ele.NEW_EXPIRY_DATE).format('DD/MM/YYYY')
      renew['NEW_INTEREST_RATE'] = ele.NEW_INTEREST_RATE
      renew['OLD_AC_OPEN_DATE'] = ele.OLD_AC_OPEN_DATE == '' || ele.OLD_AC_OPEN_DATE == null ? null : moment(ele.OLD_AC_OPEN_DATE).format('DD/MM/YYYY');
      renew['OLD_AC_SCHMAMT'] = ele.OLD_AC_SCHEME_AMT
      renew['OLD_MATUAMT'] = ele.OLD_MATUAMT
      renew['OLD_DAYS'] = ele.OLD_DAYS
      renew['OLD_INTEREST_RATE'] = ele.OLD_INTEREST_RATE
      renew['BRANCH_CODE'] = this.BRANCH_CODE
      renew['OLD_AC_INSTALLMENT'] = ele.OLD_AC_INSTALLMENT
      renew['RENEWAL_AMOUNT'] = ele.RENEWAL_AMOUNT
      renew['NEW_RECEIPTNO'] = ele.NEW_RECEIPTNO
      renew['NEW_INT_CODE'] = ele.NEW_INT_CODE
      renew['NEW_MATURITY_AMOUNT'] = ele.NEW_MATURITY_AMOUNT
      renew['OLD_AC_SCHEME_AMT'] = ele.OLD_AC_SCHEME_AMT
      renew['OLD_RECEIPT_NO'] = ele.OLD_RECEIPT_NO
      renew['PENAL_INTEREST'] = ele.PENAL_INTEREST
      renew['NORMAL_INTEREST'] = ele.NORMAL_INTEREST
      renew['PAYABLE_INTEREST'] = ele.PAYABLE_INTEREST
      renew['INTEREST_PAID_AMT'] = ele.INTEREST_PAID_AMT
      renew['OFFICER_CODE'] = ele.OFFICER_CODE
      renew['INTEREST_DATE'] = ele.INTEREST_DATE == '' || ele.INTEREST_DATE == null ? null : moment(ele.INTEREST_DATE).format('DD/MM/YYYY');
      renew['IS_ASON_AC'] = ele.IS_ASON_AC
      if (ele.TRAN_STATUS == 'UP') {
        renew['TRAN_STATUS'] = '0'
        renew['SYSCHNG_LOGIN'] = null
      }
      else if (ele.TRAN_STATUS == 'PS') {
        renew['TRAN_STATUS'] = '1'
        renew['SYSCHNG_LOGIN'] = ele.OFFICER_CODE == null ? ele.USER_CODE : ele.OFFICER_CODE
      }
      else if (ele.TRAN_STATUS == 'RJ') {
        renew['SYSCHNG_LOGIN'] = ele.OFFICER_CODE == null ? ele.USER_CODE : ele.OFFICER_CODE
        renew['TRAN_STATUS'] = '2'
      }
      renew['TRAN_NO'] = ele.TRAN_NO
      renew['NORMAL_INT_TRTYPE'] = ele.NORMAL_INT_TRTYPE
      renew['NEW_LAST_TRNDATE'] = ele.NEW_LAST_TRNDATE == '' || ele.NEW_LAST_TRNDATE == null ? null : moment(ele.NEW_LAST_TRNDATE).format('DD/MM/YYYY');
      renew['OLD_LAST_TRNDATE'] = ele.OLD_LAST_TRNDATE == '' || ele.OLD_LAST_TRNDATE == null ? null : moment(ele.OLD_LAST_TRNDATE).format('DD/MM/YYYY');
      renew['OLD_ASON_DATE'] = ele.OLD_ASON_DATE == '' || ele.OLD_ASON_DATE == null ? null : moment(ele.OLD_ASON_DATE).format('DD/MM/YYYY');
      renew['OLD_INT_CODE'] = ele.OLD_INT_CODE
      renew['OLD_INTEREST_DATE'] = ele.OLD_INTEREST_DATE == '' || ele.OLD_INTEREST_DATE == null ? null : moment(ele.OLD_INTEREST_DATE).format('DD/MM/YYYY');
      renew['TRAN_TYPE'] = ele.TRAN_TYPE
      await this.RENEWALHISTORYService.insert(renew);
    }
    console.log('RENEWALHISTORY')
  }

  //DIVPAIDTRAN
  async DIVPAIDTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`SELECT DIVPAIDTRAN.* , SCHEMAST.TYPEID AS ACTYPE FROM DIVPAIDTRAN LEFT JOIN SCHEMAST ON DIVPAIDTRAN.TRAN_ACTYPE=SCHEMAST.S_APPL`)
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let ele of data) {
      let obj = new DIVPAIDTRAN()
      let acno: number = 0
      acno = 100000 + ele.TRAN_ACNO
      obj['TRAN_NO'] = ele.TRAN_NO
      obj['SERIAL_NO'] = ele.SERIAL_NO
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_DATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY');
      obj['TRAN_TIME'] = ele.TRAN_TIME
      obj['TRAN_TYPE'] = ele.TRAN_TYPE
      obj['TRAN_MODE'] = ele.TRAN_MODE
      obj['TRAN_DRCR'] = ele.TRAN_DRCR
      obj['TRAN_ACNOTYPE'] = ele.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = ele.ACTYPE
      obj['TRAN_ACNO'] = acno + ''
      obj['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
      obj['TRAN_GLACNO'] = ele.TRAN_GLACNO
      obj['NO_OF_SHARES'] = ele.NO_OF_SHARES
      obj['NARRATION'] = ele.NARRATION
      obj['CERTIFICATE_NO'] = ele.CERTIFICATE_NO
      obj['SHARES_FROM_NO'] = ele.SHARES_FROM_NO
      obj['SHARES_TO_NO'] = ele.SHARES_TO_NO
      obj['FACE_VALUE'] = ele.FACE_VALUE
      obj['TRANSFER_ACTYPE_FROM'] = ele.TRANSFER_ACTYPE_FROM
      obj['TRANSFER_MEMBER_NO_FROM'] = ele.TRANSFER_MEMBER_NO_FROM
      obj['TRANSFER_ACTYPE_TO'] = ele.TRANSFER_ACTYPE_TO
      obj['TRANSFER_MEMBER_NO_TO'] = ele.TRANSFER_MEMBER_NO_TO
      obj['SHARES_TRANSFER_DATE'] = ele.SHARES_TRANSFER_DATE == '' || ele.SHARES_TRANSFER_DATE == null ? null : moment(ele.SHARES_TRANSFER_DATE).format('DD/MM/YYYY');
      obj['SHARES_RETURN_DATE'] = ele.SHARES_RETURN_DATE == '' || ele.SHARES_RETURN_DATE == null ? null : moment(ele.SHARES_RETURN_DATE).format('DD/MM/YYYY');
      obj['RESULATION_DATE'] = ele.RESULATION_DATE == '' || ele.RESULATION_DATE == null ? null : moment(ele.RESULATION_DATE).format('DD/MM/YYYY');
      obj['RESULATION_NO'] = ele.RESULATION_NO
      obj['AC_CLOSED'] = ele.AC_CLOSED
      obj['AC_CLOSEDT'] = ele.AC_CLOSEDT == '' || ele.AC_CLOSEDT == null ? null : moment(ele.AC_CLOSEDT).format('DD/MM/YYYY');
      obj['CHEQUE_DATE'] = ele.CHEQUE_DATE == '' || ele.CHEQUE_DATE == null ? null : moment(ele.CHEQUE_DATE).format('DD/MM/YYYY');
      obj['CHEQUE_SERIES'] = ele.CHEQUE_SERIES
      obj['CHEQUE_NO'] = ele.CHEQUE_NO
      obj['DIVIDEND_YEAR'] = ele.DIVIDEND_YEAR
      obj['DIVIDEND_ENTRY'] = ele.DIVIDEND_ENTRY
      obj['CASHIER_CODE'] = ele.CASHIER_CODE
      obj['USER_CODE'] = ele.USER_CODE
      obj['OFFICER_CODE'] = ele.OFFICER_CODE
      obj['BONUS_AMOUNT'] = ele.BONUS_AMOUNT
      await this.DIVPAIDTRANService.insert(obj);
    }
    console.log('DIVPAIDTRAN')
  }

  // TRANSACTION - ACCOTRAN
  async ACCOTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
            select rownum offset, rs.* from (
              select ACCOTRAN.*, SCHEMAST.TYPEID AS ACTYPE from ACCOTRAN LEFT JOIN SCHEMAST ON ACCOTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL order by ACCOTRAN.TRAN_NO 
           ) rs
        ) where rownum <= ${this.limit}
            and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from ACCOTRAN`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.ACCOTRANSUB(data);
  }

  async ACCOTRANSUB(data) {
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let loanObj = new ACCOTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = 'GL';
      loanObj['TRAN_ACTYPE'] = item.ACTYPE
      loanObj['TRAN_ACNO'] = item.TRAN_ACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      loanObj['TRAN_CONTRA'] = item.TRAN_CONTRA;
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['NARRATION'] = item.NARRATION;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['CLOSING_ENTRY'] = item.CLOSING_ENTRY == 0 ? '0' : '1';
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['STATEMENT_DATE'] = item.STATEMENT_DATE == '' || item.STATEMENT_DATE == null ? null : moment(item.STATEMENT_DATE).format('DD/MM/YYYY');
      await this.ACCOTRANService.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.ACCOTRAN()
    } else if (this.flag == 1) {
      console.log('ACCOTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.ACCOTRAN()
    }
  }
  //----------- DEPOTRAN
  async DEPOTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select DEPOTRAN.*, SCHEMAST.TYPEID AS ACTYPE from DEPOTRAN LEFT JOIN SCHEMAST ON DEPOTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        order by DEPOTRAN.TRAN_NO  
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DEPOTRAN`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.DEPOTRANSUB(data);
  }
  async DEPOTRANSUB(data) {
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele1 => ele1['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let loanObj = new DEPOTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = item.ACTYPE;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['NARRATION'] = item.NARRATION;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT;
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['PENAL_INTEREST'] = item.PENAL_INTEREST;
      loanObj['PASSBOOK_PRINTED'] = item.PASSBOOK_PRINTED == 0 ? '0' : '1';
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['ADDED_PENAL_INTEREST'] = item.ADDED_PENAL_INTEREST;
      loanObj['TRAN_PROCESS_YEAR'] = item.TRAN_PROCESS_YEAR;
      loanObj['TRAN_PROCESS_MONTH'] = item.TRAN_PROCESS_MONTH;
      loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT;
      loanObj['IS_DORMANT'] = item.IS_DORMANT == 0 ? '0' : '1';
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
      await this.DEPOTRANService.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.DEPOTRAN()
    } else if (this.flag == 1) {
      console.log('DEPOTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.DEPOTRAN()
    }
  }

  //loantran
  async LOANTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select LOANTRAN.*, SCHEMAST.TYPEID AS ACTYPE from LOANTRAN LEFT JOIN SCHEMAST ON LOANTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
      order by LOANTRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);

    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from LOANTRAN`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.LOANTRANSUB(data);
  }
  async LOANTRANSUB(data) {
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let loanObj = new LOANTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = item.ACTYPE;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['NARRATION'] = item.NARRATION;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['NORMAL_INTEREST'] = item.NORMAL_INTEREST;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT;
      loanObj['INTEREST_GLACNO'] = item.INTEREST_GLACNO
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['PENAL_INTEREST'] = item.PENAL_INTEREST;
      loanObj['PASSBOOK_PRINTED'] = item.PASSBOOK_PRINTED == 0 ? '0' : '1';
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['ADDED_PENAL_INTEREST'] = item.ADDED_PENAL_INTEREST;
      loanObj['TRAN_PROCESS_YEAR'] = item.TRAN_PROCESS_YEAR;
      loanObj['TRAN_PROCESS_MONTH'] = item.TRAN_PROCESS_MONTH;
      loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT;
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? '0' : '1';
      await this.LOANTRANService.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.LOANTRAN()
    } else if (this.flag == 1) {
      console.log('LOANTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.LOANTRAN()
    }
  }

  // ------------------- PIGMYTRAN
  async PIGMYTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select PIGMYTRAN.*, SCHEMAST.TYPEID AS ACTYPE from PIGMYTRAN LEFT JOIN SCHEMAST ON PIGMYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        order by PIGMYTRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from PIGMYTRAN`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close();
    this.count = result1[0].COUNT;
    await this.PIGMYTRANSUB(data);
  }
  async PIGMYTRANSUB(data) {
    for (let item of data) {
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let AGENT_ACTYPE = null
      let agentschemastData = null
      if (item.AGENT_ACTYPE != null) {
        AGENT_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.AGENT_ACTYPE);
        agentschemastData = this.PostSchemast.filter(ele => ele['id'] == AGENT_ACTYPE[0].TYPEID);
      }
      let agentBANKACNO = null
      if (item.AGENT_ACNO != 0 && agentschemastData != null) {
        let agentacno = Number(item.AGENT_ACNO) + 100000
        agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
      }
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let loanObj = new PIGMYTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      if (item.TRAN_STATUS == 'UP') {
        loanObj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        loanObj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        loanObj['TRAN_STATUS'] = '2'
      }
      loanObj['ENTRY_TYPE'] = item.ENTRY_TYPE;
      loanObj['AGENT_ACNOTYPE'] = item.AGENT_ACNOTYPE;
      loanObj['AGENT_ACTYPE'] = AGENT_ACTYPE == null ? null : AGENT_ACTYPE[0].TYPEID;
      loanObj['AGENT_ACNO'] = agentBANKACNO;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = item.ACTYPE;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['NARRATION'] = item.NARRATION;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT;
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
      loanObj['CHART_NO'] = item.CHART_NO;
      loanObj['RECEIPT_NO'] = item.RECEIPT_NO;
      loanObj['EDIT_USER'] = item.EDIT_USER;
      loanObj['EDIT_DATE'] = item.EDIT_DATE == '' || item.EDIT_DATE == null ? null : moment(item.EDIT_DATE).format('DD/MM/YYYY');
      loanObj['AUTO_VOUCHER_DATE'] = item.AUTO_VOUCHER_DATE == '' || item.AUTO_VOUCHER_DATE == null ? null : moment(item.AUTO_VOUCHER_DATE).format('DD/MM/YYYY');
      loanObj['AUTO_VOUCHER_NO'] = item.AUTO_VOUCHER_NO;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1;
      await this.PIGMYTRANService.insert(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.PIGMYTRAN()
    } else if (this.flag == 1) {
      console.log('PIGMYTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.PIGMYTRAN()
    }
  }
  //----------------- SHARETRAN
  async SHARETRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select SHARETRAN.*, SCHEMAST.TYPEID AS ACTYPE from SHARETRAN LEFT JOIN SCHEMAST ON SHARETRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
      order by SHARETRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from SHARETRAN`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.SHARETRANSUB(data);
  }
  async SHARETRANSUB(data) {
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let loanObj = new SHARETRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = item.ACTYPE;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['NO_OF_SHARES'] = item.NO_OF_SHARES;
      loanObj['NARRATION'] = item.NARRATION;
      loanObj['CERTIFICATE_NO'] = item.CERTIFICATE_NO;
      loanObj['SHARES_FROM_NO'] = item.SHARES_FROM_NO;
      loanObj['SHARES_TO_NO'] = item.SHARES_TO_NO;
      loanObj['FACE_VALUE'] = item.FACE_VALUE;
      loanObj['TRANSFER_ACTYPE_FROM'] = item.TRANSFER_ACTYPE_FROM;
      loanObj['TRANSFER_MEMBER_NO_FROM'] = item.TRANSFER_MEMBER_NO_FROM == 0 ? null : item.TRANSFER_MEMBER_NO_FROM;
      loanObj['TRANSFER_ACTYPE_TO'] = item.TRANSFER_ACTYPE_TO;
      loanObj['TRANSFER_MEMBER_NO_TO'] = item.TRANSFER_MEMBER_NO_TO == 0 ? null : item.TRANSFER_MEMBER_NO_TO;
      loanObj['SHARES_TRANSFER_DATE'] = item.SHARES_TRANSFER_DATE == '' || item.SHARES_TRANSFER_DATE == null ? null : moment(item.SHARES_TRANSFER_DATE).format('DD/MM/YYYY');
      loanObj['SHARES_RETURN_DATE'] = item.SHARES_RETURN_DATE == '' || item.SHARES_RETURN_DATE == null ? null : moment(item.SHARES_RETURN_DATE).format('DD/MM/YYYY');
      loanObj['RESULATION_DATE'] = item.RESULATION_DATE == '' || item.RESULATION_DATE == null ? null : moment(item.RESULATION_DATE).format('DD/MM/YYYY');
      loanObj['RESULATION_NO'] = item.RESULATION_NO;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1;
      loanObj['AC_CLOSEDT'] = item.AC_CLOSEDT == '' || item.AC_CLOSEDT == null ? null : moment(item.AC_CLOSEDT).format('DD/MM/YYYY');
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['DIVIDEND_YEAR'] = item.DIVIDEND_YEAR;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
      loanObj['SH_CERTIFICATE_PRINTED'] = item.SH_CERTIFICATE_PRINTED;
      loanObj['NEW_DATE'] = item.NEW_DATE == '' || item.NEW_DATE == null ? null : moment(item.NEW_DATE).format('DD/MM/YYYY');
      await this.SHARETRANService.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.SHARETRAN()
    } else if (this.flag == 1) {
      console.log('SHARETRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.SHARETRAN()
    }
  }
  //----------------- INTERESTTRAN
  async INTERESTTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select INTERESTTRAN.*, SCHEMAST.TYPEID AS ACTYPE from INTERESTTRAN LEFT JOIN SCHEMAST ON INTERESTTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        order by INTERESTTRAN.TRAN_NO
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from INTERESTTRAN`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.INTERESTTRANSUB(data);
  }
  async INTERESTTRANSUB(data) {
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let loanObj = new INTERESTTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = 1;
      loanObj['TRAN_DATE'] = moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = item.ACTYPE;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO;
      loanObj['NO_OF_SHARES'] = item.NO_OF_SHARES;
      loanObj['NARRATION'] = item.NARRATION;
      loanObj['CERTIFICATE_NO'] = item.CERTIFICATE_NO;
      loanObj['SHARES_FROM_NO'] = item.SHARES_FROM_NO;
      loanObj['SHARES_TO_NO'] = item.SHARES_TO_NO;
      loanObj['FACE_VALUE'] = item.FACE_VALUE;
      loanObj['TRANSFER_ACTYPE_FROM'] = item.TRANSFER_ACTYPE_FROM;
      loanObj['TRANSFER_MEMBER_NO_FROM'] = item.TRANSFER_MEMBER_NO_FROM;
      loanObj['TRANSFER_ACTYPE_TO'] = item.TRANSFER_ACTYPE_TO;
      loanObj['TRANSFER_MEMBER_NO_TO'] = item.TRANSFER_MEMBER_NO_TO;
      loanObj['SHARES_TRANSFER_DATE'] = item.SHARES_TRANSFER_DATE;
      loanObj['SHARES_RETURN_DATE'] = item.SHARES_RETURN_DATE;
      loanObj['RESULATION_DATE'] = item.RESULATION_DATE;
      loanObj['RESULATION_NO'] = item.RESULATION_NO;
      loanObj['AC_CLOSED'] = item.AC_CLOSED;
      loanObj['AC_CLOSEDT'] = item.AC_CLOSEDT;
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? '' : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      loanObj['DIVIDEND_YEAR'] = item.DIVIDEND_YEAR;
      loanObj['DIVIDEND_ENTRY'] = item.DIVIDEND_ENTRY;
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['TRAN_SOURCETYPE'] = item.TRAN_SOURCETYPE;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
      loanObj['SH_CERTIFICATE_PRINTED'] = item.SH_CERTIFICATE_PRINTED;
      loanObj['NEW_DATE'] = item.NEW_DATE == '' || item.NEW_DATE == null ? '' : moment(item.NEW_DATE).format('DD/MM/YYYY');
      await this.INTERESTTRANService.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.INTERESTTRAN()
    } else if (this.flag == 1) {
      console.log('INTERESTTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.INTERESTTRAN()
    }
  }
  async DIVIDEND() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select LOCKERRENTTRAN.*, SCHEMAST.TYPEID AS ACTYPE from LOCKERRENTTRAN LEFT JOIN SCHEMAST ON LOCKERRENTTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL  order by LOCKERRENTTRAN.TRAN_NO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new DIVIDEND()
      obj['WARRENT_DATE'] = item.WARRENT_DATE == '' || item.WARRENT_DATE == null ? '' : moment(item.WARRENT_DATE).format('DD/MM/YYYY');
      obj['WARRENT_NO'] = item.WARRENT_NO
      obj['DIV_FROM_YEAR'] = item.DIV_FROM_YEAR
      obj['DIV_TO_YEAR'] = item.DIV_TO_YEAR
      obj['DIV_FROM_MONTH'] = item.DIV_FROM_MONTH
      obj['DIV_TO_MONTH'] = item.DIV_TO_MONTH
      obj['ACNOTYPE'] = item.ACNOTYPE
      obj['ACTYPE'] = item.ACTYPE
      obj['AC_NO'] = Number(item.AC_NO) + 100000
      obj['TOTAL_SHARES'] = item.TOTAL_SHARES
      obj['TOTAL_SHARES_AMOUNT'] = item.TOTAL_SHARES_AMOUNT
      obj['DIVIDEND_AMOUNT'] = item.DIVIDEND_AMOUNT
      obj['DIVIDEND_STATUS'] = item.DIVIDEND_STATUS
      obj['DIV_PAID_DATE'] = item.DIV_PAID_DATE == '' || item.DIV_PAID_DATE == null ? '' : moment(item.DIV_PAID_DATE).format('DD/MM/YYYY');
      obj['DIV_TRANSFER_DATE'] = item.DIV_TRANSFER_DATE == '' || item.DIV_TRANSFER_DATE == null ? '' : moment(item.DIV_TRANSFER_DATE).format('DD/MM/YYYY');
      obj['DIV_TRANSFER_BRANCH'] = item.DIV_TRANSFER_BRANCH
      obj['DIV_TRANSFER_ACNOTYPE'] = item.DIV_TRANSFER_ACNOTYPE
      obj['DIV_TRANSFER_ACTYPE'] = item.DIV_TRANSFER_ACTYPE
      obj['DIV_TRANSFER_ACNO'] = item.DIV_TRANSFER_ACNO
      obj['MEMBER_CLOSE_DATE'] = item.MEMBER_CLOSE_DATE == '' || item.MEMBER_CLOSE_DATE == null ? '' : moment(item.MEMBER_CLOSE_DATE).format('DD/MM/YYYY');
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['BONUS_AMOUNT'] = item.BONUS_AMOUNT
      await this.DIVIDENDService.insert(obj)
    }
    console.log('dividend')
  }
  //------------- HISTORYDIVIDEND
  async HISTORYDIVIDEND() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select HISTORYDIVIDEND.*, SCHEMAST.TYPEID AS ACTYPE1 from HISTORYDIVIDEND LEFT JOIN SCHEMAST ON HISTORYDIVIDEND.ACTYPE= SCHEMAST.S_APPL
        order by HISTORYDIVIDEND.WARRENT_DATE
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from HISTORYDIVIDEND`);
    var result1 = await this.jsonConverter(datacount);
    await connection2.close()
    this.count = result1[0].COUNT;
    await this.HISTORYDIVIDENDSUB(data);
  }
  async HISTORYDIVIDENDSUB(data) {
    for (let item of data) {
      if (item.ACTYPE1 == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE1);
      let acno = Number(item.AC_NO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let loanObj = new HISTORYDIVIDEND();
      loanObj['WARRENT_DATE'] = moment(item.WARRENT_DATE).format('DD/MM/YYYY');
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['ACNOTYPE'] = item.ACNOTYPE;
      loanObj['ACTYPE'] = item.ACTYPE1;
      loanObj['AC_NO'] = acno
      loanObj['TOTAL_SHARES'] = item.TOTAL_SHARES;
      loanObj['TOTAL_SHARES_AMOUNT'] = item.TOTAL_SHARES_AMOUNT;
      loanObj['DIV_PAID_DATE'] = item.DIV_PAID_DATE;
      loanObj['DIV_TRANSFER_DATE'] = item.DIV_TRANSFER_DATE;
      loanObj['DIV_TRANSFER_BRANCH'] = item.DIV_TRANSFER_BRANCH;
      loanObj['DIV_TRANSFER_ACNOTYPE'] = item.DIV_TRANSFER_ACNOTYPE;
      loanObj['DIV_TRANSFER_ACTYPE'] = item.DIV_TRANSFER_ACTYPE;
      loanObj['DIV_TRANSFER_ACNO'] = item.DIV_TRANSFER_ACNO;
      loanObj['MEMBER_CLOSE_DATE'] = item.MEMBER_CLOSE_DATE;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['IS_LESS_EXPIRE_DATE'] = item.IS_LESS_EXPIRE_DATE;
      loanObj['AC_SALARYDIVISION_CODE'] = item.AC_SALARYDIVISION_CODE;
      loanObj['SUB_SALARYDIVISION_CODE'] = item.SUB_SALARYDIVISION_CODE;
      loanObj['WARRENT_NO'] = item.WARRENT_NO;
      loanObj['DIVIDEND_AMOUNT'] = item.DIVIDEND_AMOUNT;
      loanObj['DIVIDEND_STATUS'] = item.STATUS;
      loanObj['BONUS_AMOUNT'] = item.BONUS_AMOUNT;
      loanObj['DIV_FROM_YEAR'] = item.DIV_FROM_YEAR;
      loanObj['DIV_TO_YEAR'] = item.DIV_TO_YEAR;
      await this.HISTORYDIVIDENDService.save(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.HISTORYDIVIDEND()
    } else if (this.flag == 1) {
      console.log('HISTORYDIVIDEND');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.HISTORYDIVIDEND()
    }
  }
  //------------- HISTORYTRAN
  async HISTORYTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select HISTORYTRAN.*, SCHEMAST.TYPEID AS ACTYPE from HISTORYTRAN LEFT JOIN SCHEMAST ON HISTORYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        order by HISTORYTRAN.TRAN_NO  
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from HISTORYTRAN`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.HISTORYTRANSUB(data);
  }
  async HISTORYTRANSUB(data) {
    for (let item of data) {
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let AGENT_ACTYPE = null
      let agentschemastData = null
      if (item.AGENT_ACTYPE != null) {
        AGENT_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.AGENT_ACTYPE);
        agentschemastData = this.PostSchemast.filter(ele => ele['id'] == AGENT_ACTYPE[0].TYPEID);
      }
      let acno
      let BANKACNO
      if (item.TRAN_ACNOTYPE == 'GL') {
        acno = item.TRAN_ACNO
        BANKACNO = item.TRAN_ACNO
      }
      else {
        acno = Number(item.TRAN_ACNO) + 100000
        BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      }
      let agentBANKACNO = null
      if (item.AGENT_ACNO != 0 && agentschemastData != null) {
        let agentacno = Number(item.AGENT_ACNO) + 100000
        agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
      }
      let loanObj = new HISTORYTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = item.ACTYPE;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['AGENT_ACNOTYPE'] = item.AGENT_ACNOTYPE;
      loanObj['AGENT_ACTYPE'] = AGENT_ACTYPE == null ? null : AGENT_ACTYPE[0].TYPEID;
      loanObj['AGENT_ACNO'] = agentBANKACNO;
      loanObj['INTEREST_GLACNO'] = item.INTEREST_GLACNO
      loanObj['RECPAY_INT_GLACNO'] = item.RECPAY_INT_GLACNO
      loanObj['DD_COMMISSION_ACNO'] = item.DD_COMMISSION_ACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      if (item.TRAN_STATUS == 'UP') {
        loanObj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        loanObj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        loanObj['TRAN_STATUS'] = '2'
      }
      loanObj['NARRATION'] = item.NARRATION;
      loanObj['TOKEN_NO'] = item.TOKEN_NO;
      loanObj['DD_PREPARED'] = item.DD_PREPARED == 0 ? 0 : 1;
      loanObj['DIVIDEND_YEAR'] = item.DIVIDEND_YEAR;
      loanObj['NO_OF_SHARES'] = item.NO_OF_SHARES;
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT;
      loanObj['DD_COMMISSION_AMT'] = item.DD_COMMISSION_AMT;
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['OTHER1_ACNO'] = item.OTHER1_ACNO
      loanObj['OTHER2_ACNO'] = item.OTHER2_ACNO
      loanObj['OTHER3_ACNO'] = item.OTHER3_ACNO
      loanObj['OTHER4_ACNO'] = item.OTHER4_ACNO
      loanObj['OTHER5_ACNO'] = item.OTHER5_ACNO
      loanObj['OTHER6_ACNO'] = item.OTHER6_ACNO
      loanObj['OTHER7_ACNO'] = item.OTHER7_ACNO
      loanObj['OTHER8_ACNO'] = item.OTHER8_ACNO
      loanObj['OTHER9_ACNO'] = item.OTHER9_ACNO
      loanObj['OTHER10_ACNO'] = item.OTHER10_ACNO
      loanObj['OTHER11_ACNO'] = item.OTHER11_ACNO
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT;
      loanObj['PASSBOOK_PRINTED'] = item.PASSBOOK_PRINTED == 0 ? 0 : 1;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? '0' : '1';
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
      loanObj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT;
      loanObj['EXP_AMOUNT_FROM_PREPARATION'] = item.EXP_AMOUNT_FROM_PREPARATION;
      loanObj['TRAN_SOURCE_TYPE'] = item.TRAN_SOURCE_TYPE;
      loanObj['TRAN_SOURCE_NO'] = item.TRAN_SOURCE_NO;
      loanObj['CASH_REMITANCE_STATUS'] = item.CASH_REMITANCE_STATUS;
      loanObj['CASH_SEND_WITH_PERSON'] = item.CASH_SEND_WITH_PERSON;
      loanObj['DENO_TRAN_NO'] = item.DENO_TRAN_NO;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['CLOSING_ENTRY'] = item.CLOSING_ENTRY == 0 ? 0 : 1;
      loanObj['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO;
      loanObj['TRAN_PROCESS_YEAR'] = item.TRAN_PROCESS_YEAR;
      loanObj['TRAN_PROCESS_MONTH'] = item.TRAN_PROCESS_MONTH;
      loanObj['IS_DDPAYORDER_ENTRY'] = item.IS_DDPAYORDER_ENTRY == 0 ? 0 : 1;
      loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT;
      loanObj['DIV_PAID_YEARS'] = item.DIV_PAID_YEARS;
      loanObj['OD_INT_DATE'] = item.OD_INT_DATE == '' || item.OD_INT_DATE == null ? null : moment(item.OD_INT_DATE).format('DD/MM/YYYY');
      loanObj['IS_DORMANT'] = item.IS_DORMANT == 0 ? 0 : 1;
      loanObj['NARR_TYPE'] = item.NARR_TYPE;
      loanObj['SANCTIONED_CASH_LIMIT'] = item.SANCTIONED_CASH_LIMIT;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? '0' : '1';
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
      loanObj['PENAL_INT_GLACNO'] = item.PENAL_INT_GLACNO
      loanObj['REC_PENAL_INT_GLACNO'] = item.REC_PENAL_INT_GLACNO
      loanObj['TRANSFER_BRANCH'] = item.TRANSFER_BRANCH == 0 ? null : item.TRANSFER_BRANCH;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      await this.HISTORYTRANService.insert(loanObj);
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.HISTORYTRAN()
    } else if (this.flag == 1) {
      console.log('HISTORYTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.HISTORYTRAN()
    }
  }
  //----------- DAILYTRAN
  async DAILYTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select dailytran.*, SCHEMAST.TYPEID AS ACTYPE from dailytran LEFT JOIN SCHEMAST ON dailytran.TRAN_ACTYPE= SCHEMAST.S_APPL order by dailytran.TRAN_NO')
    let data = await this.jsonConverter(result);
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let AGENT_ACTYPE = null
      let agentschemastData = null
      if (item.AGENT_ACTYPE != null) {
        let AGENTTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${item.AGENT_ACTYPE}`)
        AGENT_ACTYPE = await this.jsonConverter(AGENTTYPE);
        agentschemastData = await this.SCHEMASTService.find({
          where: {
            id: AGENT_ACTYPE[0].TYPEID
          }
        })
      }
      let acno
      let BANKACNO
      if (item.TRAN_ACNOTYPE == 'GL') {
        acno = item.TRAN_ACNO
        BANKACNO = item.TRAN_ACNO
      }
      else {
        acno = Number(item.TRAN_ACNO) + 100000
        BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      }
      let agentBANKACNO = null
      if (item.AGENT_ACNO != 0 && agentschemastData != null) {
        let agentacno = Number(item.AGENT_ACNO) + 100000
        agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
      }
      let loanObj = new DAILYTRAN();
      loanObj['TRAN_NO'] = item.TRAN_NO;
      loanObj['SERIAL_NO'] = item.SERIAL_NO;
      loanObj['BRANCH_CODE'] = this.BRANCH_CODE;
      loanObj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      loanObj['TRAN_TIME'] = item.TRAN_TIME;
      loanObj['TRAN_TYPE'] = item.TRAN_TYPE;
      loanObj['TRAN_DRCR'] = item.TRAN_DRCR;
      loanObj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE;
      loanObj['TRAN_ACTYPE'] = item.ACTYPE;
      loanObj['TRAN_ACNO'] = BANKACNO;
      loanObj['TRAN_AMOUNT'] = item.TRAN_AMOUNT == null ? 0 : item.TRAN_AMOUNT;
      loanObj['TRAN_GLACNO'] = item.TRAN_GLACNO
      loanObj['AGENT_ACNOTYPE'] = item.AGENT_ACNOTYPE;
      loanObj['AGENT_ACTYPE'] = AGENT_ACTYPE == null ? null : AGENT_ACTYPE[0].TYPEID;
      loanObj['AGENT_ACNO'] = agentBANKACNO;
      loanObj['INTEREST_GLACNO'] = item.INTEREST_GLACNO
      loanObj['RECPAY_INT_GLACNO'] = item.RECPAY_INT_GLACNO
      loanObj['DD_COMMISSION_ACNO'] = item.DD_COMMISSION_ACNO
      loanObj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      loanObj['CHEQUE_SERIES'] = item.CHEQUE_SERIES;
      loanObj['CHEQUE_NO'] = item.CHEQUE_NO;
      if (item.TRAN_STATUS == 'UP') {
        loanObj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        loanObj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        loanObj['TRAN_STATUS'] = '2'
      }
      loanObj['NARRATION'] = item.NARRATION;
      loanObj['TOKEN_NO'] = item.TOKEN_NO;
      loanObj['DIVIDEND_YEAR'] = item.DIVIDEND_YEAR;
      loanObj['NO_OF_SHARES'] = item.NO_OF_SHARES;
      loanObj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT;
      loanObj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT;
      loanObj['DD_COMMISSION_AMT'] = item.DD_COMMISSION_AMT;
      loanObj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      loanObj['OTHER1_ACNO'] = item.OTHER1_ACNO;
      loanObj['OTHER2_ACNO'] = item.OTHER2_ACNO;
      loanObj['OTHER3_ACNO'] = item.OTHER3_ACNO;
      loanObj['OTHER4_ACNO'] = item.OTHER4_ACNO;
      loanObj['OTHER5_ACNO'] = item.OTHER5_ACNO;
      loanObj['OTHER6_ACNO'] = item.OTHER6_ACNO;
      loanObj['OTHER7_ACNO'] = item.OTHER7_ACNO;
      loanObj['OTHER8_ACNO'] = item.OTHER8_ACNO;
      loanObj['OTHER9_ACNO'] = item.OTHER9_ACNO;
      loanObj['OTHER10_ACNO'] = item.OTHER10_ACNO;
      loanObj['OTHER11_ACNO'] = item.OTHER11_ACNO;
      loanObj['OTHER11_AMOUNT'] = item.OTHER11_AMOUNT;
      loanObj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT;
      loanObj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT;
      loanObj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT;
      loanObj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT;
      loanObj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT;
      loanObj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT;
      loanObj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT;
      loanObj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT;
      loanObj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT;
      loanObj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT;
      loanObj['AC_CLOSED'] = item.AC_CLOSED == 0 ? '0' : '1';
      loanObj['CASHIER_CODE'] = item.CASHIER_CODE;
      loanObj['USER_CODE'] = item.USER_CODE;
      loanObj['OFFICER_CODE'] = item.OFFICER_CODE;
      loanObj['WITHDRAW_NO'] = item.WITHDRAW_NO;
      loanObj['IS_INTEREST_ENTRY'] = item.IS_INTEREST_ENTRY == 0 ? 0 : 1;
      loanObj['PENAL_INT_GLACNO'] = item.PENAL_INT_GLACNO
      loanObj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT;
      loanObj['TRAN_SOURCE_TYPE'] = item.TRAN_SOURCE_TYPE;
      loanObj['TRAN_SOURCE_NO'] = item.TRAN_SOURCE_NO;
      loanObj['CASH_REMITANCE_STATUS'] = item.CASH_REMITANCE_STATUS;
      loanObj['CASH_SEND_WITH_PERSON'] = item.CASH_SEND_WITH_PERSON;
      loanObj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE;
      loanObj['TRAN_PROCESS_YEAR'] = item.TRAN_PROCESS_YEAR;
      loanObj['TRAN_PROCESS_MONTH'] = item.TRAN_PROCESS_MONTH;
      loanObj['REC_PENAL_INT_GLACNO'] = item.REC_PENAL_INT_GLACNO
      loanObj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT
      loanObj['TRANSFER_BRANCH'] = item.TRANSFER_BRANCH == 0 ? null : item.TRANSFER_BRANCH;
      loanObj['TRAN_MODE'] = item.TRAN_MODE;
      await this.DAILYTRANService.save(loanObj);
    }
    await connection2.close()
    console.log('Dailytran');
  }
  async AGENTCHANGEHISTORY() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select AGENTCHANGEHISTORY.*, SCHEMAST.TYPEID AS ACTYPE from AGENTCHANGEHISTORY LEFT JOIN SCHEMAST ON AGENTCHANGEHISTORY.AC_TYPE= SCHEMAST.S_APPL  order by AGENTCHANGEHISTORY.change_date')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let AGENT_ACTYPE = null
      let agentschemastData = null
      if (item.AGENT_ACTYPE != null) {
        let AGENTTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${item.AGENT_ACTYPE}`)
        AGENT_ACTYPE = await this.jsonConverter(AGENTTYPE);
        agentschemastData = this.PostSchemast.filter(ele => ele['id'] == AGENT_ACTYPE[0].TYPEID);
      }
      let obj = new AGENTCHANGEHISTORY()
      obj['CHANGE_DATE'] = item.CHANGE_DATE == '' || item.CHANGE_DATE == null ? null : moment(item.CHANGE_DATE).format('DD/MM/YYYY');
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = item.ACTYPE
      obj['AC_NO'] = Number(item.AC_NO) + 100000
      obj['AGENT_ACNOTYPE'] = item.AGENT_ACNOTYPE
      obj['AGENT_ACTYPE'] = agentschemastData[0].id
      obj['AGENT_ACNO'] = Number(item.AGENT_ACNO) + 100000
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      await this.AGENTCHANGEHISTORYService.insert(obj)
    }
    console.log('AGENTCHANGEHISTORY');
  }
  async BANKBRANCHMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM BANKBRANCHMASTER')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new BANKBRANCHMASTER()
      obj['BANK_CODE'] = item.BANK_CODE
      obj['BRANCH_CODE'] = item.BRANCH_CODE
      obj['HOLIDAYOPEN'] = item.HOLIDAYOPEN
      obj['CLEARINGDAY'] = item.CLEARINGDAY
      obj['HOLIDAY'] = item.HOLIDAY
      obj['CLEARINGDAYS'] = item.CLEARINGDAYS
      obj['PHONE'] = item.PHONE
      obj['ADDRESS'] = item.ADDRESS
      obj['HALF_DAY'] = item.HALF_DAY
      obj['CLEARING_HOUSE'] = item.CLEARING_HOUSE
      obj['SBI_BANKCODE'] = item.SBI_BANKCODE
      await this.BANKBRANCHMASTERService.insert(obj)
    }
    console.log('BANKBRANCHMASTER')
  }
  async BANKCOMMISSION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM BANKCOMMISSION')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new BANKCOMMISSION()
      obj['BANK_CODE'] = item.BANK_CODE
      obj['EFFECTIVE_DATE'] = item.EFFECTIVE_DATE == '' || item.EFFECTIVE_DATE == null ? null : moment(item.EFFECTIVE_DATE).format('DD/MM/YYYY');
      obj['FROM_AMOUNT'] = item.FROM_AMOUNT
      obj['TO_AMOUNT'] = item.TO_AMOUNT
      obj['RATE'] = item.RATE
      obj['RATE_PER_UNIT'] = item.RATE_PER_UNIT
      obj['MIN_COMMISSION'] = item.MIN_COMMISSION
      obj['MAX_COMMISSION'] = item.MAX_COMMISSION
      await this.BANKCOMMISSIONService.insert(obj)
    }
    console.log('BANKCOMMISSION')
  }
  async BANKDEPOTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select BANKDEPOTRAN.*, SCHEMAST.TYPEID AS ACTYPE from BANKDEPOTRAN LEFT JOIN SCHEMAST ON BANKDEPOTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL order by BANKDEPOTRAN.TRAN_NO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let obj = new BANKDEPOTRAN()
      let acno = Number(item.TRAN_ACNO) + 100000
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let DEBIT_ACTYPE = null
      let agentschemastData = null
      if (item.DEBIT_ACTYPE != null) {
        DEBIT_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.DEBIT_ACTYPE);
        agentschemastData = this.PostSchemast.filter(ele => ele['id'] == DEBIT_ACTYPE[0].TYPEID);
      }

      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['TRAN_NO'] = item.TRAN_NO
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
      obj['AC_LINTEDT'] = item.AC_LINTEDT == '' || item.AC_LINTEDT == null ? null : moment(item.AC_LINTEDT).format('DD/MM/YYYY');
      obj['CREDIT_GLACNO'] = item.CREDIT_GLACNO
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['NARRATION'] = item.NARRATION
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['IS_CLOSING_ENTRY'] = item.IS_CLOSING_ENTRY == 0 ? 0 : 1
      obj['DEBIT_ACTYPE'] = agentschemastData.length == 0 ? null : agentschemastData[0].id
      obj['DEBIT_GLACNO'] = item.DEBIT_GLACNO
      await this.BANKDEPOTRANService.insert(obj)
    }
    console.log('BANKDEPOTRAN')
  }
  async BATCHVOUCHERTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from BATCHVOUCHERTRAN')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new BATCHVOUCHERTRAN()
      obj['TRAN_NO'] = item.TRAN_NO
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['TRAN_TIME'] = item.TRAN_TIME
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['COMP_CODE'] = item.COMP_CODE
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY');
      obj['CHEQUE_SERIES'] = null
      obj['CHEQUE_NO'] = item.CHEQUE_NO
      obj['FILE_IMPORT'] = 0
      await this.BATCHVOUCHERTRANService.insert(obj)
    }
    console.log('BATCHVOUCHERTRAN')
  }
  async BUDGETMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from BUDGETMASTER')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new BUDGETMASTER()
      obj['FIN_YEAR'] = item.FIN_YEAR
      obj['AC_NO'] = item.AC_NO
      obj['BUDGET_AMOUNT'] = item.BUDGET_AMOUNT
      obj['USER_CODE'] = item.USER_CODE
      await this.BUDGETMASTERService.insert(obj)
    }
    console.log('BUDGETMASTER')
  }
  async CASHINTINSTRUCTIONS() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select CASHINTINSTRUCTIONS.*, SCHEMAST.TYPEID AS ACTYPE from CASHINTINSTRUCTIONS LEFT JOIN SCHEMAST ON CASHINTINSTRUCTIONS.TRAN_ACTYPE= SCHEMAST.S_APPL order by CASHINTINSTRUCTIONS.INSTRUCTION_NO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new CASHINTINSTRUCTIONS()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['INSTRUCTION_NO'] = item.INSTRUCTION_NO
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = Number(item.TRAN_ACNO) + 100000
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['MONTHS'] = item.MONTHS
      obj['DAYS'] = item.DAYS
      obj['PAID_DATE'] = item.PAID_DATE == '' || item.PAID_DATE == null ? null : moment(item.PAID_DATE).format('DD/MM/YYYY');
      obj['PAID_VOUCHER_NO'] = item.PAID_VOUCHER_NO
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      await this.CASHINTINSTRUCTIONSService.insert(obj)
    }
    console.log('CASHINTINSTRUCTIONS')
  }
  async CDRATIO() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from CDRATIO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new CDRATIO()
      obj['STATUS_DP'] = item.STATUS_DP
      obj['STATUS_LN'] = item.STATUS_LN
      obj['STATUS_A'] = item.STATUS_A
      obj['STATUS_B'] = item.STATUS_B
      await this.CDRATIOService.insert(obj)
    }
    console.log('CDRATIO')
  }
  async CHARGES() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select distinct acnotype,effect_date,charges_type, charges_gl_acno from charges order by effect_date`)
    let data = await this.jsonConverter(result);
    let pgData = await this.CHARGESService.find()
    for (let ele of data) {
      if (pgData.some(date => moment(date['EFFECT_DATE'], 'DD/MM/YYYY').format('DD/MM/YYYY') == moment(ele.EFFECT_DATE, 'DD/MM/YYYY').format('DD/MM/YYYY'))) {
      }
      else {
        let obj = new CHARGES()
        obj['EFFECT_DATE'] = ele.EFFECT_DATE == '' || ele.EFFECT_DATE == null ? null : moment(ele.EFFECT_DATE).format('DD/MM/YYYY');
        obj['ACNOTYPE'] = ele.ACNOTYPE
        obj['CHARGES_TYPE'] = ele.CHARGES_TYPE
        obj['CHARGES_GL_ACNO'] = ele.CHARGES_GL_ACNO
        let tdRate = await this.CHARGESService.save(obj);
        //GRID QUERY
        let result1
        result1 = await connection2.execute(`select * FROM CHARGES WHERE ACNOTYPE='${ele.ACNOTYPE}' AND CHARGES_TYPE=${ele.CHARGES_TYPE}  AND CHARGES_GL_ACNO=${ele.CHARGES_GL_ACNO} AND EFFECT_DATE=${ele.EFFECT_DATE}`)
        let grid = await this.jsonConverter(result1);
        for (let element of grid) {
          let newRate = new CHARGESAMT();
          newRate['FROM_RANGE'] = element.FROM_RANGE;
          newRate['TO_RANGE'] = element.TO_RANGE;
          newRate['CHARGES_AMT'] = element.CHARGES_AMT;
          newRate['idRateID'] = tdRate.id;
          await this.CHARGESAMTService.insert(newRate);
        }
      }
    }
    await connection2.close()
    console.log('CHARGES')
  }
  async CHARGESNOTING() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select CHARGESNOTING.*, SCHEMAST.TYPEID AS ACTYPE from CHARGESNOTING LEFT JOIN SCHEMAST ON CHARGESNOTING.TRAN_ACTYPE= SCHEMAST.S_APPL order by CHARGESNOTING.tran_date')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new CHARGESNOTING()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      obj['AMOUNT_TYPE'] = item.AMOUNT_TYPE
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['OTHER1_AMOUNT'] = item.OTHER1_AMOUNT
      obj['OTHER2_AMOUNT'] = item.OTHER2_AMOUNT
      obj['OTHER3_AMOUNT'] = item.OTHER3_AMOUNT
      obj['OTHER4_AMOUNT'] = item.OTHER4_AMOUNT
      obj['OTHER5_AMOUNT'] = item.OTHER5_AMOUNT
      obj['OTHER6_AMOUNT'] = item.OTHER6_AMOUNT
      obj['OTHER7_AMOUNT'] = item.OTHER7_AMOUNT
      obj['OTHER8_AMOUNT'] = item.OTHER8_AMOUNT
      obj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT
      obj['OTHER10_AMOUNT'] = item.OTHER10_AMOUNT
      obj['NARRATION'] = item.NARRATION
      obj['GL_ENTRY'] = item.GL_ENTRY == 0 ? '0' : '1'
      obj['TRAN_GLACNO'] = item.TRAN_GLACNO
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      await this.CHARGESNOTINGService.insert(obj)
    }
    console.log('CHARGESNOTING')
  }
  async DAILYSHRTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select DAILYSHRTRAN.*, SCHEMAST.TYPEID AS ACTYPE from DAILYSHRTRAN LEFT JOIN SCHEMAST ON DAILYSHRTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL order by DAILYSHRTRAN.TRAN_NO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno
      let BANKACNO
      acno = Number(item.TRAN_ACNO) + 100000
      BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let TRANSFER_ACTYPE_FROM = null
      let TRANSFER_ACTYPE_TO = null
      let agentschemastData = null
      let TRANSFER_MEMBER_NO_FROM = null
      let BANKTRANSFER_MEMBER_NO_FROM = null
      let TRANSFER_MEMBER_NO_TO = null
      let BANKTRANSFER_MEMBER_NO_TO = null
      acno = Number(item.TRAN_ACNO) + 100000
      BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      if (item.TRANSFER_ACTYPE_FROM != null) {
        TRANSFER_ACTYPE_FROM = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.TRANSFER_ACTYPE_FROM);
        agentschemastData = this.PostSchemast.filter(ele => ele['id'] == TRANSFER_ACTYPE_FROM[0].TYPEID);
        TRANSFER_MEMBER_NO_FROM = Number(item.TRANSFER_MEMBER_NO_FROM) + 100000
        BANKTRANSFER_MEMBER_NO_FROM = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + TRANSFER_MEMBER_NO_FROM
      }
      if (item.TRANSFER_MEMBER_NO_TO != null) {
        TRANSFER_ACTYPE_TO = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.TRANSFER_ACTYPE_TO);
        let agentschemastData = this.PostSchemast.filter(ele => ele['id'] == TRANSFER_ACTYPE_TO[0].TYPEID);
        TRANSFER_MEMBER_NO_TO = Number(item.TRANSFER_MEMBER_NO_TO) + 100000
        BANKTRANSFER_MEMBER_NO_TO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + TRANSFER_MEMBER_NO_TO
      }
      let obj = new DAILYSHRTRAN();
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['TRAN_NO'] = item.TRAN_NO
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_MODE'] = item.TRAN_MODE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['TRAN_GLACNO'] = item.TRAN_GLACNO
      obj['NO_OF_SHARES'] = item.NO_OF_SHARES
      obj['NARRATION'] = item.NARRATION
      obj['CERTIFICATE_NO'] = item.CERTIFICATE_NO
      obj['SHARES_FROM_NO'] = item.SHARES_FROM_NO
      obj['SHARES_TO_NO'] = item.SHARES_TO_NO
      obj['FACE_VALUE'] = item.FACE_VALUE
      obj['TRANSFER_ACTYPE_FROM'] = TRANSFER_ACTYPE_FROM == null ? null : TRANSFER_ACTYPE_FROM[0].TYPEID
      obj['TRANSFER_MEMBER_NO_FROM'] = BANKTRANSFER_MEMBER_NO_FROM
      obj['TRANSFER_ACTYPE_TO'] = TRANSFER_ACTYPE_TO == null ? null : TRANSFER_ACTYPE_TO[0].TYPEID
      obj['TRANSFER_MEMBER_NO_TO'] = BANKTRANSFER_MEMBER_NO_TO
      obj['SHARES_TRANSFER_DATE'] = item.SHARES_TRANSFER_DATE == '' || item.SHARES_TRANSFER_DATE == null ? null : moment(item.SHARES_TRANSFER_DATE).format('DD/MM/YYYY');
      obj['SHARES_RETURN_DATE'] = item.SHARES_RETURN_DATE == '' || item.SHARES_RETURN_DATE == null ? null : moment(item.SHARES_RETURN_DATE).format('DD/MM/YYYY');
      obj['RESULATION_DATE'] = item.RESULATION_DATE == '' || item.RESULATION_DATE == null ? null : moment(item.RESULATION_DATE).format('DD/MM/YYYY');
      obj['RESULATION_NO'] = item.RESULATION_NO
      obj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1
      obj['AC_CLOSEDT'] = item.AC_CLOSEDT == '' || item.AC_CLOSEDT == null ? null : moment(item.AC_CLOSEDT).format('DD/MM/YYYY');
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
      obj['IS_AUTO_TRF_ENTRY'] = item.IS_AUTO_TRF_ENTRY
      obj['TRAN_SOURCE_NO'] = item.TRAN_SOURCE_NO
      obj['SH_CERTIFICATE_PRINTED'] = item.SH_CERTIFICATE_PRINTED == 0 ? 0 : 1
      await this.DAILYSHRTRANService.insert(obj)
    }
    console.log('DAILYSHRTRAN')
  }
  async NPALOCK() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from NPALOCK ORDER BY PROCESS_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new NPALOCK()
      obj['PROCESS_DATE'] = item.PROCESS_DATE == '' || item.PROCESS_DATE == null ? null : moment(item.PROCESS_DATE).format('DD/MM/YYYY');
      obj['LOCK_DATE'] = item.LOCK_DATE == '' || item.LOCK_DATE == null ? null : moment(item.LOCK_DATE).format('DD/MM/YYYY');
      obj['USER_CODE'] = item.USER_CODE
      await this.NPALOCKService.insert(obj)
    }
    console.log('NPALOCK')
  }
  async EXCESSCASH() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from EXCESSCASH ORDER BY TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new EXCESSCASH()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['CASH_LIMIT'] = item.CASH_LIMIT
      obj['CLOSING_BALANCE'] = item.CLOSING_BALANCE
      obj['EXCESS_CASH'] = item.EXCESS_CASH
      obj['REASON'] = item.REASON
      await this.EXCESSCASHService.insert(obj)
    }
    console.log('EXCESSCASH')
  }
  async CRARTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from CRARTRAN ORDER BY TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new CRARTRAN()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['REPORT_TYPE'] = item.REPORT_TYPE
      obj['TRAN_CRARCODE'] = item.TRAN_CRARCODE
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      await this.CRARTRANService.insert(obj)
    }
    console.log('CRARTRAN')
  }
  async DENOMINATION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from DENOMINATION ORDER BY TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new DENOMINATION()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['DENO_TRAN_NO'] = item.DENO_TRAN_NO
      obj['TOKEN_NO'] = item.TOKEN_NO
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['CREDIT_AMOUNT'] = item.CREDIT_AMOUNT
      obj['DEBIT_AMOUNT'] = item.DEBIT_AMOUNT
      obj['DENO_TYPE'] = item.DENO_TYPE
      obj['ACCEPT_1000'] = item.ACCEPT_1000
      obj['ACCEPT_500'] = item.ACCEPT_500
      obj['ACCEPT_100'] = item.ACCEPT_100
      obj['ACCEPT_50'] = item.ACCEPT_50
      obj['ACCEPT_20'] = item.ACCEPT_20
      obj['ACCEPT_10'] = item.ACCEPT_10
      obj['ACCEPT_5'] = item.ACCEPT_5
      obj['ACCEPT_2'] = item.ACCEPT_2
      obj['ACCEPT_1'] = item.ACCEPT_1
      obj['ACCEPT_COINS'] = item.ACCEPT_COINS
      obj['PAYMENT_1000'] = item.PAYMENT_1000
      obj['PAYMENT_500'] = item.PAYMENT_500
      obj['PAYMENT_100'] = item.PAYMENT_100
      obj['PAYMENT_50'] = item.PAYMENT_50
      obj['PAYMENT_20'] = item.PAYMENT_20
      obj['PAYMENT_10'] = item.PAYMENT_10
      obj['PAYMENT_5'] = item.PAYMENT_5
      obj['PAYMENT_2'] = item.PAYMENT_2
      obj['PAYMENT_1'] = item.PAYMENT_1
      obj['PAYMENT_COINS'] = item.PAYMENT_COINS
      obj['CASHIER_CODE'] = item.CASHIER_CODE
      obj['ACCEPT_2000'] = item.ACCEPT_2000
      obj['PAYMENT_2000'] = item.PAYMENT_2000
      obj['ACCEPT_200'] = item.ACCEPT_200
      obj['PAYMENT_200'] = item.PAYMENT_200
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      await this.DENOMINATIONService.insert(obj)
    }
    console.log('DENOMINATION')
  }
  async USERDENOMINATION() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from USERDENOMINATION')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new USERDENOMINATION()
      obj['CASHIER_CODE'] = item.CASHIER_CODE
      obj['DENO_2000'] = item.DENO_2000
      obj['DENO_1000'] = item.DENO_1000
      obj['DENO_500'] = item.DENO_500
      obj['DENO_100'] = item.DENO_100
      obj['DENO_200'] = item.DENO_200
      obj['DENO_50'] = item.DENO_50
      obj['DENO_20'] = item.DENO_20
      obj['DENO_10'] = item.DENO_10
      obj['DENO_5'] = item.DENO_5
      obj['DENO_2'] = item.DENO_2
      obj['DENO_1'] = item.DENO_1
      obj['DENO_COINS_CASH'] = item.DENO_COINS_CASH
      obj['TOTAL_AMOUNT'] = item.TOTAL_AMOUNT
      obj['OPENING_CASH'] = item.OPENING_CASH
      obj['DEPOSITS'] = item.DEPOSITS
      obj['WITHDRAWAL'] = item.WITHDRAWAL
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      await this.USERDENOMINATIONService.insert(obj)
    }
    console.log('USERDENOMINATION')
  }
  async SCHEMDATA() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from SCHEMDATA')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let ele of data) {
      let obj = new SCHEMDATA()
      obj['S_ACNOTYPE'] = ele.S_ACNOTYPE
      obj['S_NAME'] = ele.S_NAME
      obj['S_LOCAL_CLEARING'] = ele.S_LOCAL_CLEARING == 0 ? '0' : '1'
      obj['S_CHEQUE_BOOK'] = ele.S_CHEQUE_BOOK == 0 ? '0' : '1'
      obj['S_TEMP_OVERDRFT'] = ele.S_TEMP_OVERDRFT == 0 ? '0' : '1'
      obj['S_PERIODCL_OVERDRFT'] = ele.S_PERIODCL_OVERDRFT == 0 ? '0' : '1'
      obj['S_SPECIAL_INSTRUCTION'] = ele.S_SPECIAL_INSTRUCTION == 0 ? '0' : '1'
      obj['S_SINGLE_VOUCHER'] = ele.S_SINGLE_VOUCHER == 0 ? '0' : '1'
      obj['S_MULTY_VOUCHER'] = ele.S_MULTY_VOUCHER == 0 ? '0' : '1'
      obj['S_DEMAND_DRAFT'] = ele.S_DEMAND_DRAFT == 0 ? '0' : '1'
      obj['S_FREEZE_APPLICABLE'] = ele.S_FREEZE_APPLICABLE == 0 ? '0' : '1'
      obj['S_CASH_PAID_MIN_AMT'] = ele.S_CASH_PAID_MIN_AMT
      obj['IS_PO_APPL'] = ele.IS_PO_APPL == 0 ? '0' : '1'
      obj['S_SUB_PRINT'] = ele.S_SUB_PRINT == 0 ? '0' : '1'
      obj['S_CASH_PAID_LOCK'] = ele.S_CASH_PAID_LOCK == 0 ? '0' : '1'
      await this.SCHEMDATAService.insert(obj)
    }
    console.log('SCHEMDATA')

  }
  async HISTORYDENO() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from HISTORYDENO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new HISTORYDENO()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['CASHIER_CODE'] = item.CASHIER_CODE
      obj['DENO_1000'] = item.DENO_1000
      obj['TOTAL_AMOUNT'] = item.TOTAL_AMOUNT
      obj['DENO_COINES_AMT'] = item.DENO_COINES_AMT
      obj['DENO_2000'] = item.DENO_2000
      obj['DENO_500'] = item.DENO_500
      obj['DENO_100'] = item.DENO_100
      obj['DENO_200'] = item.DENO_200
      obj['DENO_50'] = item.DENO_50
      obj['DENO_20'] = item.DENO_20
      obj['DENO_10'] = item.DENO_10
      obj['DENO_5'] = item.DENO_5
      obj['DENO_2'] = item.DENO_2
      obj['DENO_1'] = item.DENO_1
      obj['DENO_COINS_CASH'] = item.DENO_COINS_CASH
      obj['OPENING_CASH'] = item.OPENING_CASH
      obj['DEPOSITS'] = item.DEPOSITS
      obj['WITHDRAWAL'] = item.WITHDRAWAL
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      await this.HISTORYDENOService.insert(obj)
    }
    console.log('HISTORYDENO')
  }
  async HISTORYGENERALMEETING() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from HISTORYGENERALMEETING ORDER BY MEETING_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new HISTORYGENERALMEETING()
      obj['MEETING_DATE'] = item.MEETING_DATE == '' || item.MEETING_DATE == null ? null : moment(item.MEETING_DATE).format('DD/MM/YYYY');
      obj['MEETING_FROM_YEAR'] = item.MEETING_FROM_YEAR
      obj['MEETING_TO_YEAR'] = item.MEETING_TO_YEAR
      obj['ACNOTYPE'] = item.ACNOTYPE
      obj['ACTYPE'] = item.ACTYPE
      obj['AC_NO'] = item.AC_NO
      obj['MEETING_STATUS'] = item.MEETING_STATUS
      obj['MEMBER_CLOSE_DATE'] = item.MEMBER_CLOSE_DATE == '' || item.MEMBER_CLOSE_DATE == null ? null : moment(item.MEMBER_CLOSE_DATE).format('DD/MM/YYYY');
      obj['AC_SALARYDIVISION_CODE'] = item.AC_SALARYDIVISION_CODE
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      await this.HISTORYGENERALMEETINGService.insert(obj)
    }
    console.log('HISTORYGENERALMEETING')
  }
  async INTHISTORYTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select INTHISTORYTRAN.*, SCHEMAST.TYPEID AS ACTYPE from INTHISTORYTRAN LEFT JOIN SCHEMAST ON INTHISTORYTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL order by INTHISTORYTRAN.TRAN_DATE
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from INTHISTORYTRAN`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.INTHISTORYTRANSUB(data);
  }
  async INTHISTORYTRANSUB(data) {
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new INTHISTORYTRAN()
      obj['TRAN_NO'] = item.TRAN_NO
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY');
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_MODE'] = item.TRAN_MODE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['TRAN_GLACNO'] = item.TRAN_GLACNO
      obj['INTEREST_GLACNO'] = item.INTEREST_GLACNO
      obj['RECPAY_INT_GLACNO'] = item.RECPAY_INT_GLACNO
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['NARRATION'] = item.NARRATION
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT
      obj['INTEREST_DATE'] = item.INTEREST_DATE == '' || item.INTEREST_DATE == null ? null : moment(item.INTEREST_DATE).format('DD/MM/YYYY');
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
      obj['PENAL_INT_GLACNO'] = item.PENAL_INT_GLACNO
      obj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT
      obj['LAST_INTEREST_DATE'] = item.LAST_INTEREST_DATE == '' || item.LAST_INTEREST_DATE == null ? null : moment(item.LAST_INTEREST_DATE).format('DD/MM/YYYY');
      obj['INTEREST_RATE'] = item.INTEREST_RATE
      obj['TD_SCHEME_AMOUNT'] = item.TD_SCHEME_AMOUNT
      obj['LEDGER_BALANCE'] = item.LEDGER_BALANCE
      obj['TOTAL_PRODUCTS'] = item.TOTAL_PRODUCTS
      obj['AC_OPEN_DATE'] = item.AC_OPEN_DATE == '' || item.AC_OPEN_DATE == null ? null : moment(item.AC_OPEN_DATE).format('DD/MM/YYYY');
      obj['EXPIRY_DATE'] = item.EXPIRY_DATE == '' || item.EXPIRY_DATE == null ? null : moment(item.EXPIRY_DATE).format('DD/MM/YYYY');
      obj['MONTHS'] = item.MONTHS
      obj['DAYS'] = item.DAYS
      obj['POST_TO_INDIVIDUAL_AC'] = item.POST_TO_INDIVIDUAL_AC == 0 ? 0 : 1
      obj['DAILYTRAN_POST_NO'] = item.DAILYTRAN_POST_NO
      obj['POST_PENALINT_IN_INTEREST'] = item.POST_PENALINT_IN_INTEREST
      obj['ODUE_INT_GLACNO'] = item.ODUE_INT_GLACNO
      obj['ODUE_INT_AMOUNT'] = item.ODUE_INT_AMOUNT
      obj['IS_POST_PENAL_TO_AC'] = item.IS_POST_PENAL_TO_AC
      obj['RECPAY_INT_OPENING'] = item.RECPAY_INT_OPENING
      obj['ODUE_INT_OPENING'] = item.ODUE_INT_OPENING
      obj['OD_INT_AMOUNT'] = item.OD_INT_AMOUNT
      obj['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT
      obj['REC_PENAL_INT_GLACNO'] = item.REC_PENAL_INT_GLACNO
      obj['RECPENAL_INT_OPENING'] = item.RECPENAL_INT_OPENING
      await this.INTHISTORYTRANService.insert(obj)
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.INTHISTORYTRAN()
    } else if (this.flag == 1) {
      console.log('INTHISTORYTRAN');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.INTHISTORYTRAN()
    }
  }
  async TDSTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(' select TDSTRAN.*, SCHEMAST.TYPEID AS ACTYPE from TDSTRAN LEFT JOIN SCHEMAST ON TDSTRAN.AC_TYPE = SCHEMAST.S_APPL order by TDSTRAN.TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new TDSTRAN()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['FIN_YEAR'] = item.FIN_YEAR
      obj['AC_CUSTID'] = item.AC_CUSTID
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = item.ACTYPE
      obj['AC_NO'] = item.AC_NO
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['LAST_TDS_DATE'] = item.LAST_TDS_DATE == '' || item.LAST_TDS_DATE == null ? null : moment(item.LAST_TDS_DATE).format('DD/MM/YYYY')
      obj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
      obj['TDS_AMOUNT'] = item.TDS_AMOUNT
      obj['TDS_RATE'] = item.TDS_RATE
      obj['IS_TDS_DEDUCTED'] = item.IS_TDS_DEDUCTED == 0 ? 0 : 1
      obj['FINANCIAL_INTEREST'] = item.FINANCIAL_INTEREST
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['USER_CODE'] = item.USER_CODE
      await this.TDSTRANService.insert(obj)
    }
    console.log('TDSTRAN')
  }
  async OIRTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(' select OIRTRAN.*, SCHEMAST.TYPEID AS ACTYPE from OIRTRAN LEFT JOIN SCHEMAST ON OIRTRAN.TRAN_ACTYPE = SCHEMAST.S_APPL order by OIRTRAN.TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new OIRTRAN()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['SERIAL_NO'] = item.SERIAL_NO
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['USER_CODE'] = item.USER_CODE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['TRAN_GLACNO'] = item.TRAN_GLACNO
      obj['TRAN_MODE'] = item.TRAN_MODE
      obj['OIR_AMOUNT'] = item.OIR_AMOUNT
      obj['OVERDUE_AMOUNT'] = item.OVERDUE_AMOUNT
      obj['DUE_INSTALLMENT'] = item.DUE_INSTALLMENT
      obj['NPA_DATE'] = item.NPA_DATE == '' || item.NPA_DATE == null ? null : moment(item.NPA_DATE).format('DD/MM/YYYY')
      await this.OIRTRANService.insert(obj)
    }
    console.log('OIRTRAN')
  }
  async RECOTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(' select RECOTRAN.*, SCHEMAST.TYPEID AS ACTYPE from RECOTRAN LEFT JOIN SCHEMAST ON RECOTRAN.TRAN_ACTYPE = SCHEMAST.S_APPL order by RECOTRAN.TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new RECOTRAN()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['TRAN_ACNO'] = BANKACNO
      obj['NARRATION'] = item.NARRATION
      obj['CHEQUE_NO'] = item.CHEQUE_NO
      obj['STATEMENT_DATE'] = item.STATEMENT_DATE == '' || item.STATEMENT_DATE == null ? null : moment(item.STATEMENT_DATE).format('DD/MM/YYYY')
      await this.RECOTRANService.insert(obj)
    }
    console.log('RECOTRAN')
  }
  async TDRECEIPTISSUE() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(' select TDRECEIPTISSUE.*, SCHEMAST.TYPEID AS ACTYPE from TDRECEIPTISSUE LEFT JOIN SCHEMAST ON TDRECEIPTISSUE.AC_TYPE = SCHEMAST.S_APPL order by TDRECEIPTISSUE.PRINT_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.AC_NO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new TDRECEIPTISSUE()
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['PRINT_DATE'] = item.PRINT_DATE == '' || item.PRINT_DATE == null ? null : moment(item.PRINT_DATE).format('DD/MM/YYYY')
      obj['PRINT_TIME'] = item.PRINT_TIME
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = item.ACTYPE
      obj['AC_NO'] = BANKACNO
      obj['PRINT_TYPE'] = item.PRINT_TYPE
      obj['RECEIPT_NO'] = item.RECEIPT_NO
      obj['REASON_OF_DUPLICATE'] = item.REASON_OF_DUPLICATE
      obj['USER_CODE'] = item.USER_CODE
      await this.TDRECEIPTISSUEService.insert(obj)
    }
    console.log('TDRECEIPTISSUE')
  }
  async NPADATA() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select NPADATA.*, SCHEMAST.TYPEID AS ACTYPE from NPADATA LEFT JOIN SCHEMAST ON NPADATA.AC_TYPE = SCHEMAST.S_APPL order by NPADATA.REPORT_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.AC_NO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new NPADATA()
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['REPORT_DATE'] = item.REPORT_DATE == '' || item.REPORT_DATE == null ? null : moment(item.REPORT_DATE).format('DD/MM/YYYY')
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = item.ACTYPE
      obj['AC_NO'] = BANKACNO
      obj['SECU_STATUS'] = item.SECU_STATUS
      obj['AC_NPA_DATE'] = item.AC_NPA_DATE == '' || item.AC_NPA_DATE == null ? null : moment(item.AC_NPA_DATE).format('DD/MM/YYYY')
      obj['AC_OPDATE'] = item.AC_OPDATE == '' || item.AC_OPDATE == null ? null : moment(item.AC_OPDATE).format('DD/MM/YYYY')
      obj['AC_EXPIRE_DATE'] = item.AC_EXPIRE_DATE == '' || item.AC_EXPIRE_DATE == null ? null : moment(item.AC_EXPIRE_DATE).format('DD/MM/YYYY')
      obj['AC_SANCTION_AMOUNT'] = item.AC_SANCTION_AMOUNT
      obj['AC_SECURITY_AMT'] = item.AC_SECURITY_AMT
      obj['LEDGER_BALANCE'] = item.LEDGER_BALANCE
      obj['OVERDUE_AMOUNT'] = item.OVERDUE_AMOUNT
      obj['DUE_INSTALLMENT'] = item.DUE_INSTALLMENT
      obj['NPA_PROVISION_AMT'] = item.NPA_PROVISION_AMT
      obj['RECEIVABLE_INTEREST'] = item.RECEIVABLE_INTEREST
      obj['NPA_CLASS'] = item.NPA_CLASS
      obj['NPA_MONTHS'] = item.NPA_MONTHS
      obj['NPA_PERCENTAGE'] = item.NPA_PERCENTAGE
      obj['NPA_DAYS'] = item.NPA_DAYS
      obj['SUB_CLASS_NO'] = item.SUB_CLASS_NO
      obj['OVERDUE_DATE'] = item.OVERDUE_DATE == '' || item.OVERDUE_DATE == null ? null : moment(item.OVERDUE_DATE).format('DD/MM/YYYY')
      obj['TOBE_RECOVER_AMT'] = item.TOBE_RECOVER_AMT
      obj['USER_CODE'] = item.USER_CODE
      obj['UNSECURE_PROV_AMT'] = item.UNSECURE_PROV_AMT
      obj['UNSECURE_PERCENTAGE'] = item.UNSECURE_PERCENTAGE
      obj['PROV_ON_AMT'] = item.PROV_ON_AMT
      obj['OVERDUE_INTEREST'] = item.OVERDUE_INTEREST
      obj['CURRENT_INTEREST'] = item.CURRENT_INTEREST
      obj['AC_INSTALLMENT'] = item.AC_INSTALLMENT
      obj['AMT_TOBE_RECOVER'] = item.AMT_TOBE_RECOVER
      await this.NPADATAService.insert(obj)
    }
    console.log('NPADATA')
  }
  async MORATORIUMPERIOD() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(' select MORATORIUMPERIOD.*, SCHEMAST.TYPEID AS ACTYPE from MORATORIUMPERIOD LEFT JOIN SCHEMAST ON MORATORIUMPERIOD.AC_TYPE = SCHEMAST.S_APPL order by MORATORIUMPERIOD.TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let obj = new MORATORIUMPERIOD()
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = item.ACTYPE
      obj['AC_NO'] = Number(item.AC_NO) + 100000
      obj['INSTALLMENT_NO'] = item.INSTALLMENT_NO
      obj['PERIOD'] = item.PERIOD
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['AC_RESO_DATE'] = item.AC_RESO_DATE == '' || item.AC_RESO_DATE == null ? null : moment(item.AC_RESO_DATE).format('DD/MM/YYYY')
      obj['AC_RESO_NO'] = item.AC_RESO_NO
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      await this.MORATORIUMPERIODService.insert(obj)
    }
    console.log('MORATORIUMPERIOD')
  }
  async STANDINSTRUCTIONLOG() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from STANDINSTRUCTIONLOG order by TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new STANDINSTRUCTIONLOG()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['INSTRUCTION_NO'] = item.INSTRUCTION_NO
      obj['SUCCESS_STATUS'] = item.SUCCESS_STATUS
      obj['DAILYTRAN_TRAN_NO'] = item.DAILYTRAN_TRAN_NO
      obj['EXPECTED_EXECUTION_DATE'] = item.EXPECTED_EXECUTION_DATE == '' || item.EXPECTED_EXECUTION_DATE == null ? null : moment(item.EXPECTED_EXECUTION_DATE).format('DD/MM/YYYY')
      obj['PARTICULARS'] = item.PARTICULARS
      obj['OVERDUE_INT'] = item.OVERDUE_INT
      obj['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT
      obj['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['PAYINT_AMOUNT'] = item.PAYINT_AMOUNT
      obj['OTHER9_AMOUNT'] = item.OTHER9_AMOUNT
      obj['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT
      await this.STANDINSTRUCTIONLOGService.insert(obj)
    }
    console.log('STANDINSTRUCTIONLOG')
  }
  async INTINSTRUCTIONSLOG() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from INTINSTRUCTIONSLOG order by TRAN_DATE')
    let data = await this.jsonConverter(result);

    for (let item of data) {
      let CR_ACTYPE = null
      if (item.CR_ACTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${item.CR_ACTYPE}`)
        CR_ACTYPE = await this.jsonConverter(memTYPE);
      }
      let DR_ACTYPE = null
      if (item.DR_ACTYPE != null) {
        let memTYPE = await connection2.execute(`select TYPEID from schemast where S_APPL=${item.DR_ACTYPE}`)
        DR_ACTYPE = await this.jsonConverter(memTYPE);
      }
      let obj = new INTINSTRUCTIONSLOG()
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['INSTRUCTION_NO'] = item.INSTRUCTION_NO
      obj['SUCCESS_STATUS'] = item.SUCCESS_STATUS
      obj['DAILYTRAN_TRAN_NO'] = item.DAILYTRAN_TRAN_NO
      obj['ADV_NARRATION'] = item.ADV_NARRATION
      obj['EXPECTED_EXECUTION_DATE'] = item.EXPECTED_EXECUTION_DATE == '' || item.EXPECTED_EXECUTION_DATE == null ? null : moment(item.EXPECTED_EXECUTION_DATE).format('DD/MM/YYYY')
      obj['LAST_INT_DATE'] = item.LAST_INT_DATE == '' || item.LAST_INT_DATE == null ? null : moment(item.LAST_INT_DATE).format('DD/MM/YYYY')
      obj['PARTICULARS'] = item.PARTICULARS
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['CR_ACNOTYPE'] = item.CR_ACNOTYPE
      obj['DR_ACNOTYPE'] = item.DR_ACNOTYPE
      obj['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO
      obj['DR_ACTYPE'] = DR_ACTYPE == null ? null : DR_ACTYPE[0].TYPEID
      obj['CR_ACTYPE'] = CR_ACTYPE == null ? null : CR_ACTYPE[0].TYPEID
      obj['DR_AC_NO'] = DR_ACTYPE == null ? null : Number(item.DR_AC_NO) + 100000
      obj['CR_AC_NO'] = CR_ACTYPE == null ? null : Number(item.CR_AC_NO) + 100000
      await this.INTINSTRUCTIONSLOGService.insert(obj)
    }
    await connection2.close()
    console.log('INTINSTRUCTIONSLOG')
  }
  async PASSBOOKPRINT() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select PASSBOOKPRINT.*, SCHEMAST.TYPEID AS ACTYPE from PASSBOOKPRINT LEFT JOIN SCHEMAST ON PASSBOOKPRINT.AC_TYPE = SCHEMAST.S_APPL order by PASSBOOKPRINT.TRAN_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.AC_NO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new PASSBOOKPRINT()
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = item.ACTYPE
      obj['AC_NO'] = BANKACNO
      obj['AC_NAME'] = item.AC_NAME
      obj['AC_OP_CD'] = item.AC_OP_CD
      obj['OP_BALANCE'] = item.OP_BALANCE
      obj['TRAN_NO'] = item.TRAN_NO
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['NARRATION'] = item.NARRATION
      obj['CHEQUE_NO'] = item.CHEQUE_NO
      obj['WITHDRAW_NO'] = item.WITHDRAW_NO
      obj['DR_AMOUNT'] = item.DR_AMOUNT
      obj['CR_AMOUNT'] = item.CR_AMOUNT
      obj['OTHER_AMOUNT'] = item.OTHER_AMOUNT
      obj['OTHER_DRCR'] = item.OTHER_DRCR
      await this.PASSBOOKPRINTService.insert(obj)
    }
    console.log('PASSBOOKPRINT')
  }
  async PASSBOOKHISTORY() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select PASSBOOKHISTORY.*, SCHEMAST.TYPEID AS ACTYPE from PASSBOOKHISTORY LEFT JOIN SCHEMAST ON PASSBOOKHISTORY.AC_TYPE = SCHEMAST.S_APPL order by PASSBOOKHISTORY.LAST_PRINT_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.AC_NO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new PASSBOOKHISTORY()
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = item.ACTYPE
      obj['AC_NO'] = BANKACNO
      obj['LAST_PRINT_DATE'] = item.LAST_PRINT_DATE == '' || item.LAST_PRINT_DATE == null ? null : moment(item.LAST_PRINT_DATE).format('DD/MM/YYYY')
      obj['LAST_PRINT_TRANNO'] = item.LAST_PRINT_TRANNO
      await this.PASSBOOKHISTORYService.insert(obj)
    }
    console.log('PASSBOOKHISTORY')
  }
  async SUBSIDARYMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from SUBSIDARYMASTER order by code')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new SUBSIDARYMASTER()
      obj['NAME'] = item.NAME
      await this.SUBSIDARYMASTERService.insert(obj)
    }
    console.log('SUBSIDARYMASTER')
  }
  async DEADSTOCKHEADER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select DEADSTOCKHEADER.*, SCHEMAST.TYPEID AS ACTYPE from DEADSTOCKHEADER LEFT JOIN SCHEMAST ON DEADSTOCKHEADER.TRANSFER_ACTYPE = SCHEMAST.S_APPL order by DEADSTOCKHEADER.TRAN_DATE,DEADSTOCKHEADER.TRAN_NO')
    let data = await this.jsonConverter(result);
    for (let item of data) {
      let date = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      let obj = new DEADSTOCKHEADER()
      obj['TRAN_YEAR'] = item.TRAN_YEAR
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_NO'] = item.TRAN_NO
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_MODE'] = item.TRAN_MODE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['TRAN_GLACNO'] = item.TRAN_GLACNO
      obj['CHEQUE_DATE'] = item.CHEQUE_DATE == '' || item.CHEQUE_DATE == null ? null : moment(item.CHEQUE_DATE).format('DD/MM/YYYY')
      obj['CHEQUE_SERIES'] = item.CHEQUE_SERIES
      obj['CHEQUE_NO'] = item.CHEQUE_NO
      obj['TRANSFER_ACNOTYPE'] = item.TRANSFER_ACNOTYPE
      obj['TRANSFER_ACTYPE'] = item.ACTYPE
      obj['TRANSFER_ACNO'] = item.TRANSFER_ACNOTYPE == 'GL' ? item.TRANSFER_ACNO : Number(item.TRANSFER_ACNO) + 100000
      obj['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO
      obj['TRAN_SUPPLIER_NAME'] = item.TRAN_SUPPLIER_NAME
      obj['SUPPLIER_BILL_DATE'] = item.SUPPLIER_BILL_DATE == '' || item.SUPPLIER_BILL_DATE == null ? null : moment(item.SUPPLIER_BILL_DATE).format('DD/MM/YYYY')
      obj['SUPPLIER_BILL_NO'] = item.SUPPLIER_BILL_NO
      obj['RESO_NO'] = item.RESO_NO
      obj['RESO_DATE'] = item.RESO_DATE == '' || item.RESO_DATE == null ? null : moment(item.RESO_DATE).format('DD/MM/YYYY')
      obj['NARRATION'] = item.NARRATION
      obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      obj['CGST_AMT'] = item.CGST_AMT
      obj['SGST_AMT'] = item.SGST_AMT
      obj['IGST_AMT'] = item.IGST_AMT
      obj['GST_NO'] = item.GST_NO
      obj['SYSCHNG_LOGIN'] = item.OFFICER_CODE
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = 0
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = 1
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = 2
      }
      obj['status'] = 1
      let header = await this.DEADSTOCKHEADERService.save(obj)
      let detail = await connection2.execute(`select * from deadstockdetail where tran_date=TO_DATE('${date}','DD/MM/YYYY') and tran_no=${item.TRAN_NO} order by serial_no`)
      let resultDetail = await this.jsonConverter(detail);
      for (let ele of resultDetail) {
        let itemmasterData = await this.ITEMMASTERService.findOne({ ITEM_CODE: ele.ITEM_CODE })
        let details = new DEADSTOCKDETAIL()
        details['TRAN_YEAR'] = ele.TRAN_YEAR
        details['TRAN_DATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY')
        details['TRAN_NO'] = ele.TRAN_NO
        details['SERIAL_NO'] = ele.SERIAL_NO
        details['TRAN_DRCR'] = ele.TRAN_DRCR
        details['ITEM_CODE'] = ele.ITEM_CODE
        details['ITEM_TYPE'] = itemmasterData?.ITEM_TYPE
        details['ITEM_NAME'] = itemmasterData?.ITEM_NAME
        details['ITEM_RATE'] = ele.ITEM_RATE
        details['ITEM_QTY'] = ele.ITEM_QTY
        details['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
        details['TRAN_REF_NO'] = ele.TRAN_REF_NO
        details['DEPR_RATE'] = ele.DEPR_RATE
        details['deadstockHeader'] = header.id
        await this.DEADSTOCKDETAILService.insert(details)
      }
    }
    await connection2.close()
    console.log('DEADSTOCKHEADER-DEADSTOCKDETAIL')
  }
  async DEPOCLOSETRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select * from (
      select rownum offset, rs.* from (
        select DEPOCLOSETRAN.*, SCHEMAST.TYPEID AS ACTYPE from DEPOCLOSETRAN LEFT JOIN SCHEMAST ON DEPOCLOSETRAN.TRAN_ACTYPE= SCHEMAST.S_APPL
        order by DEPOCLOSETRAN.TRAN_NO  
     ) rs
  ) where rownum <= ${this.limit}
      and offset > ${this.offset}`);
    var data = await this.jsonConverter(result);
    //get maxcount of row
    let datacount = await connection2.execute(`select count(*) as count from DEPOCLOSETRAN`);
    await connection2.close()
    var result1 = await this.jsonConverter(datacount);
    this.count = result1[0].COUNT;
    await this.DEPOCLOSETRANSUB(data);
  }
  async DEPOCLOSETRANSUB(data) {
    for (let ele of data) {
      if (ele.ACTYPE == null) {
        continue
      }
      let date = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY')
      let schemastData = this.PostSchemast.filter(ele1 => ele1['id'] == ele.ACTYPE);
      let acno = Number(ele.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new DEPOCLOSETRAN()
      obj['TRAN_NO'] = ele.TRAN_NO
      obj['TRAN_DATE'] = ele.TRAN_DATE == '' || ele.TRAN_DATE == null ? null : moment(ele.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_TIME'] = ele.TRAN_TIME
      obj['TRAN_TYPE'] = ele.TRAN_TYPE
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_ACNOTYPE'] = ele.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = ele.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['LEDGER_BAL'] = ele.LEDGER_BAL
      obj['EXCESS_INT'] = ele.EXCESS_INT
      obj['TDS_AMOUNT'] = ele.TDS_AMOUNT
      obj['SURCHARGE_AMOUNT'] = ele.SURCHARGE_AMOUNT
      obj['COMMISSION_CHARGES'] = ele.COMMISSION_CHARGES
      obj['COMMISSION_GLACNO'] = ele.COMMISSION_GLACNO
      obj['OTHER_CHARGES_AMOUNT'] = ele.OTHER_CHARGES_AMOUNT
      obj['OTHER_CHARGES_GLACNO'] = ele.OTHER_CHARGES_GLACNO
      obj['PENAL_INTEREST_AMOUNT'] = ele.PENAL_INTEREST_AMOUNT
      obj['PAID_INTEREST_AMOUNT'] = ele.PAID_INTEREST_AMOUNT
      obj['NET_INTEREST_AMOUNT'] = ele.NET_INTEREST_AMOUNT
      obj['UNPAID_CASHINT_AMOUNT'] = ele.UNPAID_CASHINT_AMOUNT
      obj['TOTAL_INTEREST_AMOUNT'] = ele.TOTAL_INTEREST_AMOUNT
      obj['NET_PAYABLE_AMOUNT'] = ele.NET_PAYABLE_AMOUNT
      obj['INTEREST_RATE'] = ele.INTEREST_RATE
      obj['IS_PREMATURE_CLOSE'] = ele.IS_PREMATURE_CLOSE == 0 ? 0 : 1
      if (ele.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = 0
      }
      else if (ele.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = 1
      }
      else if (ele.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = 2
      }
      obj['TOKEN_NO'] = ele.TOKEN_NO
      obj['CASHIER_CODE'] = ele.CASHIER_CODE
      obj['USER_CODE'] = ele.USER_CODE
      obj['OFFICER_CODE'] = ele.OFFICER_CODE
      obj['NARRATION'] = ele.NARRATION
      obj['PAYABLE_INTEREST_AMOUNT'] = ele.PAYABLE_INTEREST_AMOUNT
      obj['AUTO_MATURED_PAYABLEAMT'] = ele.AUTO_MATURED_PAYABLEAMT
      obj['AFT_MATURE_INT_RATE'] = ele.AFT_MATURE_INT_RATE
      obj['AFT_MATURE_INT_AMT'] = ele.AFT_MATURE_INT_AMT
      obj['CHEQUE_SERIES'] = ele.CHEQUE_SERIES
      obj['CHEQUE_NO'] = ele.CHEQUE_NO
      obj['CHEQUE_DATE'] = ele.CHEQUE_DATE == '' || ele.CHEQUE_DATE == null ? null : moment(ele.CHEQUE_DATE).format('DD/MM/YYYY')
      obj['SYSCHNG_LOGIN'] = ele.OFFICER_CODE
      obj['status'] = 1
      let depoclose = await this.DEPOCLOSETRANService.save(obj)
      if (ele.TRAN_TYPE == 'TR') {
        let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
        let detail = await connection2.execute(`select DEPOCLOSETRANSAC.*, SCHEMAST.TYPEID AS ACTYPE from DEPOCLOSETRANSAC LEFT JOIN SCHEMAST ON DEPOCLOSETRANSAC.TRANSFER_ACTYPE= SCHEMAST.S_APPL
        where DEPOCLOSETRANSAC.tran_date=TO_DATE('${date}','DD/MM/YYYY') and DEPOCLOSETRANSAC.tran_no=${ele.TRAN_NO} order by DEPOCLOSETRANSAC.serial_no`)
        let resultDetail = await this.jsonConverter(detail);
        for (let item of resultDetail) {
          let schemastData = this.PostSchemast.filter(item1 => item1['id'] == item.ACTYPE);
          let acno = Number(item.TRANSFER_ACNO) + 100000
          let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
          let details = new DEPOCLOSETRANSAC()
          details['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
          details['TRAN_NO'] = item.TRAN_NO
          details['SERIAL_NO'] = item.SERIAL_NO
          details['TRAN_AMOUNT'] = item.TRAN_AMOUNT
          details['HO_SUB_GLACNO'] = item.HO_SUB_GLACNO
          details['TRANSFER_ACNOTYPE'] = item.TRANSFER_ACNOTYPE
          details['TRANSFER_ACTYPE'] = item.ACTYPE
          details['TRANSFER_ACNO'] = BANKACNO
          details['NARRATION'] = item.NARRATION
          details['REC_PENAL_INT_AMOUNT'] = item.REC_PENAL_INT_AMOUNT
          details['RECPAY_INT_AMOUNT'] = item.RECPAY_INT_AMOUNT
          details['PENAL_INT_AMOUNT'] = item.PENAL_INT_AMOUNT
          details['INTEREST_AMOUNT'] = item.INTEREST_AMOUNT
          details['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1
          details['depoclosetran'] = depoclose.id
          await this.DEPOCLOSETRANSACService.insert(details)
        }
        await connection2.close()
      }
    }
    if (this.offset <= this.count && this.flag == 0) {
      this.offset = this.offset + 1000;
      await this.DEPOCLOSETRAN()
    } else if (this.flag == 1) {
      console.log('DEPOCLOSETRAN-DEPOCLOSETRANSAC');
      this.offset = 0
      this.flag = 0
    }
    else if (this.flag == 0 && this.offset != 0) {
      this.offset = this.offset + 1000;
      this.flag = 1
      await this.DEPOCLOSETRAN()
    }
  }
  async SHARECAPITALAMTDETAILS() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from SHARE_CAPITAL_AMT_DETAILS order by FROM_DATE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new SHARECAPITALAMTDETAILS()
      obj['FROM_DATE'] = item.FROM_DATE == '' || item.FROM_DATE == null ? null : moment(item.FROM_DATE).format('DD/MM/YYYY')
      obj['TO_DATE'] = item.TO_DATE == '' || item.TO_DATE == null ? null : moment(item.TO_DATE).format('DD/MM/YYYY')
      obj['AMOUNT'] = item.AMOUNT
      obj['SYSID'] = this.PostSyspara[0].id
      await this.SHARECAPITALAMTDETAILSService.insert(obj)
    }
    console.log('SHARECAPITALAMTDETAILS')
  }
  async MANAGERVIEW() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select * from MANAGERVIEW order by SR_NO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new MANAGERVIEW()
      obj['TYPE '] = item.TYPE
      obj['STATEMENT_CODE '] = item.STATEMENT_CODE
      obj['DECRIPTION '] = item.DECRIPTION
      obj['IS_DISPLAY'] = item.IS_DISPLAY == 0 ? '0' : '1'
      obj['PERCENTAGE_TO_WORKING_CAPITAL'] = item.PERCENTAGE_TO_WORKING_CAPITAL
      await this.MANAGERVIEWService.insert(obj)
    }
    console.log('MANAGERVIEW')
  }
  async GLREPORTLINK() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(' select GLREPORTLINK.*, SCHEMAST.TYPEID AS ACTYPE from GLREPORTLINK LEFT JOIN SCHEMAST ON GLREPORTLINK.AC_TYPE= SCHEMAST.S_APPL order by GLREPORTLINK.CODE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new GLREPORTLINK()
      obj['REPORT_TYPE'] = item.REPORT_TYPE
      obj['CODE'] = item.CODE
      obj['CODE_TYPE'] = item.CODE_TYPE
      obj['AC_ACNOTYPE'] = item.AC_ACNOTYPE
      obj['AC_TYPE'] = item.ACTYPE
      obj['AC_NO'] = item.AC_NO
      obj['SUB_COLUMN_NO'] = item.SUB_COLUMN_NO
      obj['EFFECT_DATE'] = item.EFFECT_DATE == '' || item.EFFECT_DATE == null ? null : moment(item.EFFECT_DATE).format('DD/MM/YYYY')
      obj['REVERSE_CODE'] = item.REVERSE_CODE
      obj['DEFAULT_BALTYPE'] = item.DEFAULT_BALTYPE
      obj['EFFECT_TO_DATE'] = item.EFFECT_TO_DATE == '' || item.EFFECT_TO_DATE == null ? null : moment(item.EFFECT_TO_DATE).format('DD/MM/YYYY')
      await this.GLREPORTLINKService.insert(obj)
    }
    console.log('GLREPORTLINK')
  }
  async GLREPORTMASTER() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('SELECT * FROM GLREPORTMASTER ORDER BY CODE')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      let obj = new GLREPORTMASTER()
      obj['CODE'] = item.CODE
      obj['NAME'] = item.NAME
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['FIRST_SRNO'] = item.FIRST_SRNO
      obj['SECOND_SRNO'] = item.SECOND_SRNO
      obj['THIRD_SRNO'] = item.THIRD_SRNO
      obj['FOURTH_SRNO'] = item.FOURTH_SRNO
      obj['CODE_TYPE'] = item.CODE_TYPE
      obj['REPORT_TYPE'] = item.REPORT_TYPE
      obj['PERCENTAGE'] = item.PERCENTAGE
      obj['PERCENTAGE_OF_CODE'] = item.PERCENTAGE_OF_CODE
      obj['PERCENTAGE_CONSIDARATION'] = item.PERCENTAGE_CONSIDARATION
      obj['TEMP_AMOUNT'] = item.TEMP_AMOUNT
      obj['FINAL_AMOUNT'] = item.FINAL_AMOUNT
      obj['FINAL_AMOUNT1'] = item.FINAL_AMOUNT1
      obj['FINAL_AMOUNT2'] = item.FINAL_AMOUNT2
      obj['FINAL_HEADING1'] = item.FINAL_HEADING1
      obj['FINAL_HEADING2'] = item.FINAL_HEADING2
      obj['INPUT_ALLOWED'] = item.INPUT_ALLOWED == 0 ? 0 : 1
      obj['SUB_COLUMN_REQUIRED'] = item.SUB_COLUMN_REQUIRED
      obj['IS_RATIO'] = item.IS_RATIO == 0 ? 0 : 1
      obj['ALTERNET_CODE'] = item.ALTERNET_CODE
      obj['HO_LIQ_CODE1'] = item.HO_LIQ_CODE1
      obj['HO_LIQ_CODE2'] = item.HO_LIQ_CODE2
      obj['IS_PRINT_IN_REPORT'] = item.IS_PRINT_IN_REPORT == 0 ? 0 : 1
      obj['INNER_AMT_REQD'] = item.INNER_AMT_REQD
      obj['ADD_PL_AMOUNT'] = item.ADD_PL_AMOUNT == 0 ? 0 : 1
      obj['PRINT_AT_OUTER'] = item.PRINT_AT_OUTER
      obj['ALTERNATE_BALANCE_CODE'] = item.ALTERNATE_BALANCE_CODE
      await this.GLREPORTMASTERService.insert(obj)
    }
    console.log('GLREPORTMASTER')
  }
  async LOCKERTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select LOCKERTRAN.*, SCHEMAST.TYPEID AS ACTYPE from LOCKERTRAN LEFT JOIN SCHEMAST ON LOCKERTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL  order by LOCKERTRAN.TRAN_NO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new LOCKERTRAN()
      obj['TRAN_NO'] = item.TRAN_NO
      obj['SERIAL_NO'] = item.SERIAL_NO
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['LOCKER_OPENING_TIME'] = item.LOCKER_OPENING_TIME
      obj['LOCKER_CLOSING_TIME'] = item.LOCKER_CLOSING_TIME
      obj['OPENING_USER_CODE'] = item.OPENING_USER_CODE
      obj['CLOSING_USER_CODE'] = item.CLOSING_USER_CODE
      obj['NARRATION'] = item.NARRATION
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      await this.LOCKERTRANService.insert(obj)
    }
    console.log('LOCKERTRAN')
  }
  async LOCKERRENTTRAN() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute('select LOCKERRENTTRAN.*, SCHEMAST.TYPEID AS ACTYPE from LOCKERRENTTRAN LEFT JOIN SCHEMAST ON LOCKERRENTTRAN.TRAN_ACTYPE= SCHEMAST.S_APPL  order by LOCKERRENTTRAN.TRAN_NO')
    let data = await this.jsonConverter(result);
    await connection2.close()
    for (let item of data) {
      if (item.ACTYPE == null) {
        continue
      }
      let TRF_ACTYPE = null
      let agentschemastData = null
      if (item.TRF_ACTYPE != null) {
        TRF_ACTYPE = this.OracleSchemast.filter(ele => ele['S_APPL'] == item.TRF_ACTYPE);
        agentschemastData = this.PostSchemast.filter(ele => ele['id'] == TRF_ACTYPE[0].TYPEID);
      }
      let agentBANKACNO = null
      if (item.TRF_ACNO != 0 && agentschemastData != null) {
        let agentacno = Number(item.TRF_ACNO) + 100000
        agentBANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + agentschemastData[0].S_APPL + agentacno
      }
      let schemastData = this.PostSchemast.filter(ele => ele['id'] == item.ACTYPE);
      let acno = Number(item.TRAN_ACNO) + 100000
      let BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + acno
      let obj = new LOCKERRENTTRAN()
      obj['TRAN_NO'] = item.TRAN_NO
      obj['TRAN_DATE'] = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      obj['TRAN_TIME'] = item.TRAN_TIME
      obj['TRAN_ACNOTYPE'] = item.TRAN_ACNOTYPE
      obj['TRAN_ACTYPE'] = item.ACTYPE
      obj['TRAN_ACNO'] = BANKACNO
      obj['USER_CODE'] = item.USER_CODE
      obj['OFFICER_CODE'] = item.OFFICER_CODE
      if (item.TRAN_STATUS == 'UP') {
        obj['TRAN_STATUS'] = '0'
      }
      else if (item.TRAN_STATUS == 'PS') {
        obj['TRAN_STATUS'] = '1'
      }
      else if (item.TRAN_STATUS == 'RJ') {
        obj['TRAN_STATUS'] = '2'
      }
      obj['BRANCH_CODE'] = this.BRANCH_CODE
      obj['TRAN_TYPE'] = item.TRAN_TYPE
      obj['TRAN_DRCR'] = item.TRAN_DRCR
      obj['TRAN_MODE'] = item.TRAN_MODE
      obj['TRAN_AMOUNT'] = item.TRAN_AMOUNT
      obj['RENT_FROM_DATE'] = item.RENT_FROM_DATE
      obj['RENT_UPTO_DATE'] = item.RENT_UPTO_DATE
      obj['RECEIPT_NO'] = item.RECEIPT_NO
      obj['TRF_ACNOTYPE'] = item.TRF_ACNOTYPE
      obj['TRF_ACTYPE'] = TRF_ACTYPE == null ? null : TRF_ACTYPE[0].TYPEID;
      obj['TRF_ACNO'] = agentBANKACNO
      obj['AC_CLOSED'] = item.AC_CLOSED == 0 ? 0 : 1
      obj['TRAN_ENTRY_TYPE'] = item.TRAN_ENTRY_TYPE
      await this.LOCKERRENTTRANService.insert(obj)
    }
    console.log('LOCKERRENTTRAN')
  }
  async PIGMYCHART() {
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`select DISTINCT PIGMYCHART.AGENT_ACTYPE,PIGMYCHART.AGENT_ACNO,TRAN_DATE from PIGMYCHART`);
    var data = await this.jsonConverter(result);
    let pgmasterdata = await this.PGMASTERService.find()
    for (let item of data) {
      let date = item.TRAN_DATE == '' || item.TRAN_DATE == null ? null : moment(item.TRAN_DATE).format('DD/MM/YYYY')
      let pigmychartdata = await connection2.execute(`SELECT PIGMYCHART.*,SCHEMAST.TYPEID as ACTYPE FROM PIGMYCHART  LEFT JOIN SCHEMAST ON PIGMYCHART.AGENT_ACTYPE= SCHEMAST.S_APPL  where AGENT_ACTYPE=${item.AGENT_ACTYPE} AND AGENT_ACNO=${item.AGENT_ACNO} AND TRAN_DATE=TO_DATE('${date}','DD/MM/YYYY') AND ROWNUM =1`);
      let pigmychart = await this.jsonConverter(pigmychartdata);
      if (pigmychart[0].ACTYPE == null) {
        continue
      }
      else {
        let schemastData = this.PostSchemast.filter(item1 => item1['id'] == pigmychart[0].ACTYPE);
        let AGENT_ACNO = Number(pigmychart[0].AGENT_ACNO) + 100000
        let AGENT_BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + AGENT_ACNO
        let pigmy = new PIGMYCHART()
        pigmy['BRANCHCODE'] = this.PostBranchOne[0].CODE
        pigmy['BRANCH_ID'] = this.BRANCH_CODE
        pigmy['TRAN_DATE'] = pigmychart[0].TRAN_DATE == '' || pigmychart[0].TRAN_DATE == null ? null : moment(pigmychart[0].TRAN_DATE).format('DD/MM/YYYY')
        pigmy['TRAN_TIME'] = pigmychart[0].TRAN_TIME
        pigmy['TRAN_TYPE'] = pigmychart[0].TRAN_TYPE
        pigmy['TRAN_DRCR'] = pigmychart[0].TRAN_DRCR
        pigmy['TRAN_MODE'] = pigmychart[0].TRAN_MODE
        if (pigmychart[0].TRAN_STATUS == 'UP') {
          pigmy['TRAN_STATUS'] = '0'
        }
        else if (pigmychart[0].TRAN_STATUS == 'PS') {
          pigmy['TRAN_STATUS'] = '1'
        }
        else if (pigmychart[0].TRAN_STATUS == 'RJ') {
          pigmy['TRAN_STATUS'] = '2'
        }
        pigmy['TRAN_AMOUNT'] = pigmychart[0].TRAN_AMOUNT
        pigmy['ENTRY_TYPE'] = pigmychart[0].ENTRY_TYPE
        pigmy['AGENT_ACNOTYPE'] = pigmychart[0].AGENT_ACNOTYPE
        pigmy['AGENT_ACTYPE'] = pigmychart[0].ACTYPE
        pigmy['AGENT_ACNO'] = AGENT_ACNO
        pigmy['AGENT_BANKACNO'] = AGENT_BANKACNO
        pigmy['CASHIER_CODE'] = pigmychart[0].CASHIER_CODE
        pigmy['USER_CODE'] = pigmychart[0].USER_CODE
        pigmy['OFFICER_CODE'] = pigmychart[0].OFFICER_CODE
        pigmy['AUTO_VOUCHER_DATE'] = pigmychart[0].AUTO_VOUCHER_DATE || pigmychart[0].AUTO_VOUCHER_DATE == null ? null : moment(pigmychart[0].AUTO_VOUCHER_DATE).format('DD/MM/YYYY')
        pigmy['AUTO_VOUCHER_NO'] = pigmychart[0].AUTO_VOUCHER_NO
        pigmy['CHART_NO'] = pigmychart[0].CHART_NO
        pigmy['BRANCH_CODE'] = this.BRANCH_CODE
        let pigmychartInsert = await this.PIGMYCHARTService.save(pigmy)
        let pigmychartmasterdata = await connection2.execute(`SELECT PIGMYCHART.*,SCHEMAST.TYPEID as ACTYPE FROM PIGMYCHART  LEFT JOIN SCHEMAST ON PIGMYCHART.TRAN_ACTYPE= SCHEMAST.S_APPL  where AGENT_ACTYPE=${item.AGENT_ACTYPE} AND AGENT_ACNO=${item.AGENT_ACNO} AND TRAN_DATE=TO_DATE('${date}','DD/MM/YYYY') order by PIGMYCHART.SERIAL_NO`);
        let pigmychartmaster = await this.jsonConverter(pigmychartmasterdata);
        let totalAmount = await connection2.execute(`SELECT sum(TRAN_AMOUNT) AS AMOUNT FROM PIGMYCHART  where AGENT_ACTYPE=${item.AGENT_ACTYPE} AND AGENT_ACNO=${item.AGENT_ACNO} AND TRAN_DATE=TO_DATE('${date}','DD/MM/YYYY')`);
        let getAmount = await this.jsonConverter(totalAmount);
        let updateAmount = await this.PIGMYCHARTService.update(pigmychartInsert.id, { TRAN_AMOUNT: getAmount[0].AMOUNT })
        for (let ele of pigmychartmaster) {
          let schemastData = this.PostSchemast.filter(item1 => item1['id'] == ele.ACTYPE);
          let TRAN_ACNO = Number(ele.TRAN_ACNO) + 100000
          let TRAN_BANKACNO = this.PostSyspara[0].BANK_CODE + this.PostBranchOne[0].CODE + schemastData[0].S_APPL + TRAN_ACNO
          let pgmastData = pgmasterdata.filter(item1 => item1['BANKACNO'] == TRAN_BANKACNO);
          let chart = new PIGMYCHARTMASTER()
          chart['SERIAL_NO'] = ele.SERIAL_NO
          chart['TRAN_ACNOTYPE'] = ele.TRAN_ACNOTYPE
          chart['TRAN_ACTYPE'] = ele.ACTYPE
          chart['TRAN_ACNO'] = TRAN_ACNO
          chart['TRAN_BANKACNO'] = TRAN_BANKACNO
          chart['TRAN_AMOUNT'] = ele.TRAN_AMOUNT
          chart['TRAN_GLACNO'] = ele.TRAN_GLACNO
          chart['RECEIPT_NO'] = ele.RECEIPT_NO
          chart['CHART_NO'] = ele.CHART_NO
          chart['PIGMYCHARTID'] = pigmychartInsert.id
          chart['pigmyAccountID'] = pgmastData == null ? null : pgmastData[0].id
          await this.PIGMYCHARTMASTERService.insert(chart)
        }
      }
    }
    await connection2.close()
    console.log('PIGMYCHART')
  }
  async custdocument() {
    let fileExt = 'png'
    let connection2 = await oracledb.getConnection({ user: this.user, password: this.password, connectString: this.connectionString });
    let result = await connection2.execute(`SELECT SIGN.* FROM SIGN inner join idmaster on SIGN.ac_no=idmaster.ac_no`);
    var data = await this.jsonConverter(result);
    for (let ele of data) {
      let idmasterID = (this.Postidmaster.find(idmaster => idmaster['ORA_AC_NO'] == ele.AC_NO && idmaster['ORA_BRANCH'] == this.BRANCH_CODE))
      if (idmasterID == undefined) {
        continue;
      }
      if (!fs.existsSync('upload')) {
        fs.mkdirSync('upload', { recursive: true });
      }
      if (!fs.existsSync(`upload/${ele.AC_NO}`)) {
        fs.mkdirSync(`upload/${ele.AC_NO}`, { recursive: true });
      }
      if (ele.PHOTO != null) {
        let blobData = ele.PHOTO;
        const file_path: string = `upload/${ele.AC_NO}/PHOTO.${fileExt}`;
        let writeStream = createWriteStream(file_path);
        (blobData.pipe.bind(blobData))(writeStream);
        let custDocument = new CUSTDOCUMENT()
        custDocument['PATH'] = file_path
        custDocument['idmasterID'] = idmasterID.id
        custDocument['DocumentMasterID'] = 1
        const doc = this.CUSTDOCUMENTService.insert(custDocument)
      }
      if (ele.SIGN1 != null) {
        let blobData = ele.SIGN1;
        const file_path: string = `upload/${ele.AC_NO}/SIGN1.${fileExt}`;
        let writeStream = createWriteStream(file_path);
        (blobData.pipe.bind(blobData))(writeStream);
        let custDocument = new CUSTDOCUMENT()
        custDocument['PATH'] = file_path
        custDocument['idmasterID'] = idmasterID.id
        custDocument['DocumentMasterID'] = 2
        const doc = this.CUSTDOCUMENTService.insert(custDocument)
      }
      if (ele.SIGN2 != null) {
        let blobData = ele.SIGN2;
        const file_path: string = `upload/${ele.AC_NO}/SIGN2.${fileExt}`;
        let writeStream = createWriteStream(file_path);
        (blobData.pipe.bind(blobData))(writeStream);
        let custDocument = new CUSTDOCUMENT()
        custDocument['PATH'] = file_path
        custDocument['idmasterID'] = idmasterID.id
        custDocument['DocumentMasterID'] = 2
        const doc = this.CUSTDOCUMENTService.insert(custDocument)
      }
      if (ele.SIGN3 != null) {
        let blobData = ele.SIGN3;
        const file_path: string = `upload/${ele.AC_NO}/SIGN3.${fileExt}`;
        let writeStream = createWriteStream(file_path);
        (blobData.pipe.bind(blobData))(writeStream);
        let custDocument = new CUSTDOCUMENT()
        custDocument['PATH'] = file_path
        custDocument['idmasterID'] = idmasterID.id
        custDocument['DocumentMasterID'] = 2
        const doc = this.CUSTDOCUMENTService.insert(custDocument)
      }
      if (ele.SIGN4 != null) {
        let blobData = ele.SIGN4;
        const file_path: string = `upload/${ele.AC_NO}/SIGN4.${fileExt}`;
        let writeStream = createWriteStream(file_path);
        (blobData.pipe.bind(blobData))(writeStream);
        let custDocument = new CUSTDOCUMENT()
        custDocument['PATH'] = file_path
        custDocument['idmasterID'] = idmasterID.id
        custDocument['DocumentMasterID'] = 2
        const doc = this.CUSTDOCUMENTService.insert(custDocument)
      }
    }
    return 0
  }
}