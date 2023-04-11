import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

sns.set_style('darkgrid')

with open('datos_api.txt', 'r') as f:
    tiempos = [float(line.strip()) for line in f]

tiempos_api = np.array(tiempos)
tiempos_grafica = tiempos_api.astype('float')
cantidad_consultas = np.arange(0, len(tiempos_grafica),1)

plt.plot(cantidad_consultas, tiempos_api)
plt.xlabel('Número de consulta')
plt.ylabel('Tiempo de consulta en ms')
plt.title('Llamados a API')
plt.show()