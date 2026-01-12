
import React from 'react';
import { 
  PerpendicularDiagram, 
  ParallelDiagram, 
  RightAngleDiagram, 
  AcuteAngleDiagram, 
  ObtuseAngleDiagram, 
  StraightAngleDiagram, 
  AdjacentAnglesDiagram, 
  VerticalAnglesDiagram,
  TriangleDiagram,
  TriangleSumDiagram,
  AltitudeInsideDiagram,
  AltitudeOutsideDiagram,
  AltitudeOnSideDiagram,
  TriangleAreaDiagram,
  RectangleDiagram,
  RectangleOppositeDiagram,
  RectangleAdjacentDiagram,
  RectangleSidesDiagram,
  RectangleAreaFormulaDiagram
} from './components/GeometryDiagrams';

const Page: React.FC<{ children: React.ReactNode; showTitle?: boolean; pageNumber: number }> = ({ children, showTitle = false, pageNumber }) => (
  <div className="page-break bg-white mx-auto my-8 p-[1.5cm] w-[21cm] min-h-[29.7cm] shadow-2xl border border-gray-200 flex flex-col text-right leading-relaxed text-gray-900 overflow-hidden relative">
    {/* Page Numbering - Top Left Circle */}
    <div className="absolute top-6 left-6 w-10 h-10 border-2 border-gray-800 rounded-full flex items-center justify-center font-bold text-lg no-print-border">
      {pageNumber}
    </div>

    {showTitle && (
      <div className="text-center mb-10 border-b-4 border-double border-gray-800 pb-6">
        <h1 className="text-3xl font-bold mb-2">מושגים בגיאומטריה</h1>
        <h2 className="text-2xl font-semibold text-gray-700">סיכום מושגים בסיסיים</h2>
      </div>
    )}
    {children}
  </div>
);

const MathSymbol: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-red-600 font-mono font-bold text-2xl ltr block mt-2">
    {children}
  </span>
);

const Fraction: React.FC<{ num: React.ReactNode; den: React.ReactNode }> = ({ num, den }) => (
  <span className="inline-flex flex-col items-center align-middle mx-1 ltr leading-none translate-y-[-0.1em]">
    <span className="border-b-2 border-red-600 px-2 pb-1 font-bold">{num}</span>
    <span className="pt-1 font-bold">{den}</span>
  </span>
);

const Definition: React.FC<{ title: string; children: React.ReactNode; diagram?: React.ReactNode; math?: React.ReactNode }> = ({ title, children, diagram, math }) => (
  <div className="mb-10 flex items-start">
    <div className="flex-1">
      <div className="flex flex-col">
        <strong className="text-xl block mb-2 text-blue-900">{title}</strong>
        <div className="text-gray-800 text-lg">{children}</div>
        {math && <MathSymbol>{math}</MathSymbol>}
      </div>
    </div>
    {diagram && <div className="mr-8 shrink-0">{diagram}</div>}
  </div>
);

const Statement: React.FC<{ children: React.ReactNode; diagram?: React.ReactNode; math?: React.ReactNode }> = ({ children, diagram, math }) => (
  <div className="mb-8 flex items-center bg-gray-50 p-5 rounded-xl border-r-8 border-blue-600 shadow-sm">
    <div className="flex-1">
      <div className="flex flex-col">
        <div className="mb-2">
          <strong className="text-lg font-bold">משפט: </strong>
          <span className="text-gray-900 text-lg">{children}</span>
        </div>
        {math && <MathSymbol>{math}</MathSymbol>}
      </div>
    </div>
    {diagram && <div className="mr-6 shrink-0">{diagram}</div>}
  </div>
);

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 no-print-bg">
      <button
        onClick={handlePrint}
        className="no-print fixed bottom-10 left-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 z-50 flex items-center gap-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        הדפס סיכום מעוצב
      </button>

      {/* עמוד 1 */}
      <Page showTitle pageNumber={1}>
        <div className="pt-4">
          <Definition title="ישרים מאונכים (ישרים ניצבים):" math="a ⊥ b" diagram={<PerpendicularDiagram />}>
            שני ישרים שנפגשים ויוצרים זווית ישרה, כלומר זווית של 90 מעלות.
          </Definition>
          <Definition title="ישרים מקבילים:" math="a ∥ b" diagram={<ParallelDiagram />}>
            שני ישרים שאינם נפגשים אף פעם, גם אם נמשיך אותם לשני הכיוונים, והמרחק ביניהם נשאר קבוע.
          </Definition>
        </div>
      </Page>

      {/* עמוד 2 */}
      <Page pageNumber={2}>
        <h3 className="text-2xl font-black mb-10 border-b-4 border-indigo-600 pb-2 w-fit">זוויות</h3>
        <Definition title="זווית ישרה:" math="α = 90°" diagram={<RightAngleDiagram />}>זווית בת 90 מעלות.</Definition>
        <Definition title="זווית חדה:" math="α < 90°" diagram={<AcuteAngleDiagram />}>זווית שקטנה מ־90 מעלות.</Definition>
        <Definition title="זווית קהה:" math="90° < α < 180°" diagram={<ObtuseAngleDiagram />}>זווית שגדולה מ־90 מעלות.</Definition>
        <Definition title="זווית שטוחה:" math="α = 180°" diagram={<StraightAngleDiagram />}>זווית של 180 מעלות.</Definition>
        
        <div className="mt-12 space-y-8">
          <Statement math="α + β + γ = 180°" diagram={<TriangleSumDiagram />}>סכום זוויות במשולש הוא 180 מעלות.</Statement>
          <Statement math="α + β = 180°" diagram={<AdjacentAnglesDiagram />}>סכום זוויות צמודות הוא 180 מעלות.</Statement>
          <Statement math="∠1 = ∠2" diagram={<VerticalAnglesDiagram />}>זוויות קודקודיות שוות זו לזו.</Statement>
        </div>
      </Page>

      {/* עמוד 3 */}
      <Page pageNumber={3}>
        <h3 className="text-2xl font-black mb-10 border-b-4 border-indigo-600 pb-2 w-fit">משולש וגובה</h3>
        <Definition title="משולש:" math="ΔABC" diagram={<TriangleDiagram />}>
          מצולע שיש לו שלוש צלעות ושלושה קודקודים.
        </Definition>
        
        <div className="mb-10">
          <h4 className="text-xl font-bold mb-4 text-blue-900">גובה במשולש:</h4>
          <p className="text-gray-800 text-lg mb-6">גובה במשולש הוא קו ישר שיוצא מקודקוד ויורד אל הצלע שמולו בזווית ישרה. קיימים שלושה מקרים בהתאם לסוג המשולש:</p>
          
          <div className="space-y-10">
            <Definition title="1. גובה בתוך המשולש:" math="h ⊥ a" diagram={<AltitudeInsideDiagram />}>
              במשולש חד-זוויות, הגובה תמיד עובר בתוך המשולש ונוחת ישירות על הצלע.
            </Definition>

            <Definition title="2. גובה מחוץ למשולש:" math="h ⊥ המשך הבסיס" diagram={<AltitudeOutsideDiagram />}>
              במשולש קהה-זוויות, הגובה שיורד מאחד הקודקודים החדים נוחת על המשך הצלע שמולו, מחוץ למשולש.
            </Definition>

            <Definition title="3. גובה שהוא צלע המשולש:" math="h = צלע המשולש" diagram={<AltitudeOnSideDiagram />}>
              במשולש ישר-זווית, שתי הצלעות שיוצרות את הזווית הישרה (הניצבים) הן הגבהים אחת של השנייה.
            </Definition>
          </div>
        </div>

        <Definition 
          title="שטח משולש:" 
          math={<div className="flex items-center gap-2">S = <Fraction num="a * h" den="2" /></div>} 
          diagram={<TriangleAreaDiagram />}
        >
          שטח של משולש מחושב על ידי כפל הגובה בצלע שאליה הוא יורד (או המשכה), לחלק ל-2.
        </Definition>
      </Page>

      {/* עמוד 4 */}
      <Page pageNumber={4}>
        <h3 className="text-2xl font-black mb-10 border-b-4 border-indigo-600 pb-2 w-fit">מרובעים ומלבן</h3>
        <Statement math="∠A + ∠B + ∠C + ∠D = 360°" diagram={<RectangleDiagram />}>סכום הזוויות במרובע הוא 360 מעלות.</Statement>
        <Definition title="מלבן:" math="∠A = ∠B = ∠C = ∠D = 90°" diagram={<RectangleDiagram />}>
          <strong>הגדרה:</strong> מלבן הוא מרובע שבו כל הזוויות ישרות.
          <br /><br />
          במרובע יש סכום של 360 מעלות. שלוש זוויות ישרות שוות ל־270 מעלות. לכן חסרה זווית רביעית של 90 מעלות.
        </Definition>
        <Definition title="צלעות נגדיות:" math="AB = CD , BC = AD" diagram={<RectangleOppositeDiagram />}>
          צלעות נגדיות הן צלעות שנמצאות אחת מול השנייה.
          <br />
          <strong>תכונה:</strong> במלבן הצלעות הנגדיות שוות זו לזו.
        </Definition>
        <Definition title="צלעות סמוכות:" math="AB ∩ BC = {B}" diagram={<RectangleAdjacentDiagram />}>
          צלעות סמוכות הן צלעות שנפגשות בקודקוד אחד ונמצאות אחת ליד השנייה.
        </Definition>
        <Definition title="אורך ורוחב:" math="אורך , רוחב" diagram={<RectangleSidesDiagram />}>
          האורך הוא הצלע הארוכה במלבן. הרוחב הוא הצלע הקצרה במלבן.
        </Definition>
        <Definition title="שטח מלבן:" math="S = a * b" diagram={<RectangleAreaFormulaDiagram />}>
          שטח של מלבן מחושב על ידי כפל האורך ברוחב.
        </Definition>
        <Definition title="היקף מלבן:" math="P = 2 * (a + b)" diagram={<RectangleDiagram />}>
          ההיקף הוא סכום כל הצלעות שמקיפות את המלבן.
        </Definition>
      </Page>

      {/* עמוד 5 – סרטוטים מרכזיים */}
      <Page pageNumber={5}>
        <h3 className="text-2xl font-black mb-12 border-b-4 border-indigo-600 pb-2 w-fit">סרטוטים מסכמים</h3>
        <p className="mb-14 text-xl text-gray-700">בדף זה מופיעים <strong>רק סרטוטים</strong> מרכזיים להמחשה גרפית מדויקת.</p>
        
        <div className="space-y-16">
          <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-10 rounded-3xl text-center bg-gray-50/50">
            <h4 className="text-xl font-bold mb-6 text-indigo-800">שרטוט: זוויות קודקודיות</h4>
            <VerticalAnglesDiagram />
            <div className="mt-8">
              <MathSymbol>∠1 = ∠2</MathSymbol>
              <p className="mt-2 text-gray-600 italic">זוג זוויות קודקודיות שוות זו לזו.</p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-10 rounded-3xl text-center bg-gray-50/50">
            <h4 className="text-xl font-bold mb-6 text-indigo-800">שרטוט: גובה מחוץ למשולש</h4>
            <AltitudeOutsideDiagram />
            <div className="mt-8">
              <MathSymbol>h ⊥ המשך הבסיס</MathSymbol>
              <p className="mt-2 text-gray-600 italic">במשולש קהה זווית, הגובה יכול ליפול מחוץ למשולש על המשך הבסיס.</p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-10 rounded-3xl text-center bg-gray-50/50">
            <h4 className="text-xl font-bold mb-6 text-indigo-800">שרטוט: מלבן וצלעות נגדיות</h4>
            <RectangleOppositeDiagram />
            <div className="mt-8">
              <MathSymbol>AB = CD , BC = AD</MathSymbol>
              <p className="mt-2 text-gray-600 italic">במלבן כל זוג צלעות נגדיות שוות ומקבילות.</p>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default App;
