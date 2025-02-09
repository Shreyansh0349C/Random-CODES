from flask import Flask,render_template,request
import matplotlib.pyplot as plt
import os

app=Flask(__name__)

@app.route('/', methods=['GET','POST'])
def details():
    if request.method=='GET':
        return render_template('index.html')
    
    elif request.method=='POST':
        id_type=request.form.get['ID']
        user_id=request.form.get['id_value']

        if not id_type or not user_id or not user_id.isdigit():
            return render_template('wrong.html')
        
        user_id=int(id)
        data=[]

        if not os.path.exists('data.csv'):
            return render_template('wrong.html')

        with open('data.csv','r') as file:
            file.readline()

            for row in file:
                try:
                    row_data = list(map(int, row.strip().split(',')))
                    if len(row_data) != 3:
                        continue  # Skip malformed rows
                    
                    if id_type == 'student_id' and row_data[0] == user_id:
                        data.append(row_data)
                    elif id_type == 'course_id' and row_data[1] == user_id:
                        data.append(row_data)
                except ValueError:
                    continue  # Skip non-integer rows

        if not data:
            return render_template('wrong.html')

        if id_type == 'student_id':
            total_marks = sum(x[2] for x in data)
            return render_template('studentdetails.html', data=data, total_marks=total_marks)

        else:  # Course ID Case
            marks = [x[2] for x in data]
            if not marks:
                return render_template('wrong.html')

            avg_marks = sum(marks) / len(marks)
            max_marks = max(marks)

            plt.hist(marks, bins=5, edgecolor='black')
            plt.xlabel('Marks')
            plt.ylabel('Frequency')
            plt.title('Marks Distribution')
            plt.savefig('static/plot.png')
            plt.close()  # Close plot to free memory

            return render_template('coursedetails.html', average_marks=avg_marks, maximum_marks=max_marks, img='static/plot.png')

if __name__ == '__main__':
    app.run(debug=True)