using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using TestMathematica;

namespace TestMathematica
{
    class MusicSheetGenerator
    {
        public static XmlDocument generateMusicSheet(List<Note> listNotes)
        {
            Note[] notes = listNotes.ToArray();
            int i = 0;

            XmlDocument sheet = new XmlDocument();
            sheet.Load("MusicSheetTemplate.xml");

            while (notes[i]._start < 4)
            {
                XmlDocument note = new XmlDocument();
                note.Load("NoteNodeTemplate.xml");
                var let = notes[i]._step[0].ToString();
                var sharp = notes[i]._step.Length > 1;
                note.SelectSingleNode("/note/pitch/step").InnerText = let;
                note.SelectSingleNode("/note/pitch/octave").InnerText = notes[i]._octave.ToString();

                if (sharp)
                {
                    var nc = note.CreateNode(XmlNodeType.Element, "alter", "");
                    note.SelectSingleNode("/note/pitch").AppendChild(nc);
                    note.SelectSingleNode("/note/pitch/alter").InnerText = "1";
                }

                int duration = notes[i]._end - notes[i]._start;
                note.SelectSingleNode("/note/duration").InnerText = duration.ToString();

                if (1 < duration && duration < 4) note.SelectSingleNode("note/type").InnerText = "half";
                else if (duration > 4) note.SelectSingleNode("note/type").InnerText = "whole";
                else note.SelectSingleNode("note/type").InnerText = "quarter";
                sheet.SelectSingleNode("/score-partwise/part/measure").AppendChild(sheet.ImportNode(note.DocumentElement, true));
                i++;
            }

            int currentTime;
            int currentMeasure = 1;

            while (notes.Length > i)
            {
                currentTime = notes[i]._start;
                if (currentMeasure * 4 < currentTime)
                {
                    ++currentMeasure;
                    XmlDocument measure = new XmlDocument();
                    measure.Load("MeasureTemplate.xml");
                    measure.SelectSingleNode("/measure").Attributes[0].Value = (currentMeasure).ToString();
                    sheet.SelectSingleNode("/score-partwise/part").AppendChild(sheet.ImportNode(measure.DocumentElement, true));
                }

                XmlDocument note = new XmlDocument();
                note.Load("NoteNodeTemplate.xml");
                var let = notes[i]._step[0].ToString();
                var sharp = notes[i]._step.Length > 1;
                note.SelectSingleNode("/note/pitch/step").InnerText = let;
                note.SelectSingleNode("/note/pitch/octave").InnerText = notes[i]._octave.ToString();

                if (sharp)
                {
                    var nc = note.CreateNode(XmlNodeType.Element, "alter", "");
                    note.SelectSingleNode("/note/pitch").AppendChild(nc);
                    note.SelectSingleNode("/note/pitch/alter").InnerText = "1";
                }

                int duration = notes[i]._end - notes[i]._start;
                note.SelectSingleNode("/note/duration").InnerText = duration.ToString();

                if (1 < duration && duration < 4) note.SelectSingleNode("/note/type").InnerText = "half";
                else if (duration > 4) note.SelectSingleNode("/note/type").InnerText = "whole";
                else note.SelectSingleNode("/note/type").InnerText = "quarter";

                sheet.SelectSingleNode("/score-partwise/part/measure[@number='" + currentMeasure + "']").AppendChild(sheet.ImportNode(note.DocumentElement, true));
                i++;
            }
            sheet.Save("test.xml");
            Console.ReadLine();
            return sheet;
        }
    }
}
